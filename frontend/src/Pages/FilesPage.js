import React, { useEffect, useRef, useState } from "react";
import FileList from "../Components/FileUI/FileLists";
import FileUploads from "../Components/FileUI/FileUploads";
import { getFile, getFiles, uploadFiles } from "../Services/file-servie";
const Row = ({ children }) => <div className="row">{children}</div>;
const Column = ({ children, ...props }) => {
  console.log(Object.keys(props));
  return (
    <div className={`col ${Object.keys(props)} shadow m-2`}>{children}</div>
  );
};
const FilesPage = () => {
  // const [files, setFiles] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [files, setFiles] = useState([]);
  const fileToDownload = useRef();
  const downloadLinkRef = useRef();

  useEffect(() => {
    console.group("Filepage Component");
    getFiles().then((response) => {
      setFiles(response.files);
    });
  }, []);

  const onFileSelect = (files) => {
    setSelectedFiles(files);
    // console.log(files);
  };

  const onFileUpload = () => {
    uploadFiles(selectedFiles)
      .then(({ files: newFiles }) => {
        setFiles([...files, ...newFiles]);
        setSelectedFiles([]);
      })
      .catch((err) => console.log(err));
  };
  const handelDownload = (file) => {
    fileToDownload.current = file;
    getFile(file._id).then((url) => {
      const link = downloadLinkRef.current;
      link.href = url;
      link.download = file.originalname;
      link.click();
    });
  };
  return (
    <Row>
      <a ref={downloadLinkRef} href="" download={"filedownload.txt"}></a>
      <Column col-8>
        <FileList files={files} onDownload={handelDownload} />
      </Column>

      <Column>
        <FileUploads
          onFileSelect={onFileSelect}
          onFileUpload={onFileUpload}
          selectedFiles={selectedFiles}
        />
      </Column>
    </Row>
  );
};

export default FilesPage;
