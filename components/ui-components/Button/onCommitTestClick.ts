import axios from 'axios';
const onCommitTestClick = async ( incomingFile:any ) => {

    const { fileName, fileContent } = incomingFile;
    
    console.log("in handle save with incoming File:"+JSON.stringify(incomingFile));
    try {
        const res = await axios.post(
          `http://localhost:3000/api/testspec/${fileName}`,fileContent,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        console.log("this is the res"+JSON.stringify(res)) //check now
      } catch (e) {}
}      

export default onCommitTestClick;