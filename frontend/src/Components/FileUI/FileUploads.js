import React, { useRef } from "react";

const FileUploads = ({onFileSelect,onFileUpload,selectedFiles}) => {

  const fileRef=useRef();
  
  const onHandelChange=({target})=>{
    const files=Array.from(target.files)
    // console.log(files);
    onFileSelect(files);
  }
  const handelUpload=()=>{
    onFileUpload();
    fileRef.current.value=null

  }
  return (
    <div className="p-4">
      <h1>Upload Files</h1>
      <hr />
      <div>
        <input type="file" name="files" multiple required onChange={onHandelChange} onFileUpload={onFileUpload} ref={fileRef}/>

        <div className="mt-4">
            <ul className="list-group">
            {
              selectedFiles.map((file,i)=>{
                return <li className="list-group-item" key={i}> {i+1})  {file.name}</li>
              })
            }
             
            </ul>
        </div>
        <div className="mt-4">
          <button className="btn btn-success " onClick={handelUpload}>Upload</button>
        </div>
      </div>
    </div>
  );
};

export default FileUploads;
