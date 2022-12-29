import axios from 'axios';
const onRunTestClick = async ( incomingFile:any ) => {

    const { fileName, fileContent } = incomingFile;
    
    console.log("in handle run test with incoming File:"+JSON.stringify(incomingFile));
    try {
        const res = await axios.post(
          `http://localhost:3000/api/run-tests`,fileContent,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        console.log("this is the res"+JSON.stringify(res)) //check now
        return res;
      } catch (e) {}
}      

export default onRunTestClick;