import { spawn } from 'child_process';
import { v4 } from 'uuid';
import path from 'path';
import os from 'os';
import getConfig from 'next/config'
import fs from 'fs/promises';

const { serverRuntimeConfig } = getConfig();

export interface TestRunnerOptions {
    testDir: string;
    outputDir: string;
    testConfigPath: string;
    runId: string;
}

export async function runTests() {
    const runId = v4();
    const outPath = path.join(os.tmpdir(), 'playwrightReport', runId);
    const playwrightRunRes = await runPlaywright({
        testDir: serverRuntimeConfig.TEST_PATH,
        testConfigPath: serverRuntimeConfig.TEST_CONFIG_PATH, // see next.config.js
        runId: v4(),
        outputDir: outPath,
    });

    console.debug(`====== test run ${runId} ======`);
    console.debug(playwrightRunRes, '\n');

    const reportPath = path.join(outPath, 'test-results.json');
    const report = await fs.readFile(reportPath, { encoding: 'utf-8' });
    return JSON.parse(report);
}

async function runPlaywright(opt: TestRunnerOptions) {
    const projectEnvProp = {
        ...process.env,
        RUN_ID: opt.runId,
        TEST_DIR: opt.testDir,
        OUTPUT_DIR: opt.outputDir,
    };
    const child = spawn('npx', ['playwright', 'test', `--config=${opt.testConfigPath}`], { env: projectEnvProp });

    return new Promise<string>((resolve, reject) => {
        let scriptOutput = "";
        child.stdout.setEncoding('utf8');
        child.stdout.on('data', function (data) {
            data = data.toString();
            scriptOutput += data;
        });

        child.stderr.setEncoding('utf8');
        child.stderr.on('data', function (data) {
            data = data.toString();
            scriptOutput += data;
        });

        child.stdout.setEncoding('utf8');
        child.on('close', function (code) { // Should probably be 'exit', not 'close'
            // if code !== 0 test failed
            resolve(scriptOutput);
        });
        child.on('error', function (err) {
            reject(err);
        });
    });
}