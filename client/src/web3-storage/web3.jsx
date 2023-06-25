import "./web3.css";
import { useState } from "react";
import { create as ipfsHttpClient } from "ipfs-http-client";
import { Web3Storage, getFilesFromPath } from 'web3.storage'
import BiderForm from "../pages/biderpostform/BiderForm";
import { useNavigate } from "react-router-dom";





// require("dot-env").config({path:".env"});

const projectId = "2M5aWABDDME6TZYRmrMEMftAbdq"
const projectSecretKey = "91a42de39accf97776173ae66975e3ca"
const authorization = "Basic " + btoa(projectId + ":" + projectSecretKey);

 function Web3() {
   const [uploadedImages, setUploadedImages] = useState([]);
   const navigate = useNavigate();
   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDJFRjRiMTdhYzY1MjgzNEYxQTBkMTQxNTUwOTRlYTdiYTMzRWEyOWIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzcyMzA1NTE0NTMsIm5hbWUiOiJ0ZW5kZXJzcGFjZSJ9.CwbHkp79KAwCjQTpRmlRJWSWKa10VBSJLLv4eMrmVJs";
  //  const [linkurl,setUrl] = useState(null);
  // const ipfs = ipfsHttpClient({
  //   url: "https://filecoin.infura.io",
  //   headers: {
  //     authorization,
  //   },
  // });
  // const onSubmitHandler = async (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const files = form[0].files;

  //   if (!files || files.length === 0) {
  //     return alert("No files selected");
  //   }

  //   const file = files[0];
  //   // upload files
  //   const result = await ipfs.add(file);

  //   setUploadedImages([
  //     ...uploadedImages,
  //     {
  //       cid: result.cid,
  //       path: result.path,
  //     },
  //   ]);

  //   form.reset();
  // };
  
    const onSubmitHandler = async (event) => {
    event.preventDefault();
    const form = event.target;
    const files = form[0].files;

    if (!files || files.length === 0) {
      return alert("No files selected");
    }

    const file = files[0];
    const storage = new Web3Storage({ token })
     
  
    console.log(`Uploading ${files.length} files`)
    const cid = await storage.put(files)
    console.log('Content added with CID:', "https://"+cid+".ipfs.w3s.link/"+`${file.name}`)
    const linkurl = "https://"+cid+".ipfs.w3s.link/"+`${file.name}`;
    if(linkurl != null){
      navigate("/BiderForm", { state: { documenturl: linkurl } })
    }
    // setUrl(urlfromfilecoin);
    
  }
  
  const navigateToBiderForm = async()=>{
    if(linkurl != null){
      navigate("/BiderForm", { state: { documenturl: linkurl } })
    }
    {console.log("test link", linkurl)}
  }

  return (
    <div className="app">
      <div className="app__container">
        {  (
          <div className="container">
            <h1>IPFS uploader</h1>
           <form onSubmit={onSubmitHandler}>
              <label for="file-upload" class="custom-file-upload">
                Select File
              </label>
              <input id="file-upload" type="file" name="file" />
              <button  className="button" type="submit">
                Uploa d file
              </button>
            </form>
          </div>
        ) }
        <div className="data">
          {uploadedImages.map((image, index) => (
            <>
              <img
                className="image"
                alt={`Uploaded #${index + 1}`}
                src={"https://filecoin.infura.io" + image.path}
                style={{ maxWidth: "400px", margin: "15px" }}
                key={image.cid.toString() + index}
              />
              <h4>Link to IPFS:</h4>
              <a href={linkurl}>
                <h3>{linkurl}</h3>
              </a>
            </>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Web3;
