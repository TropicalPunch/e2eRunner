import axios from 'axios';
const onCommitTestClick = async ( incomingFile:any ) => {

    const { fileName, fileContent } = incomingFile;
    
    console.log("in handle save with incoming File:"+incomingFile);
    try {
        const res = await axios.post(
          `http://localhost:3000/api/${fileName}.txt`,fileContent,
          {
            headers: {
              "Content-Type": "application/json",
            },
          },
        );
        console.log(res) //check now
      } catch (e) {}
}      

export default onCommitTestClick;