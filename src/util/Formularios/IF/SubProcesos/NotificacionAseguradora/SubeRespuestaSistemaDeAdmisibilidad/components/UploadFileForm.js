import React, { useState } from "react";

import { useDropzone } from "react-dropzone";

const UploadFileForm = props => {
  const [formDeploy, setFormDeploy] = useState({
    deploymentName: "",
    enableDuplicateFiltering: false,
    deployChangedOnly: false,
    bpmnFile: ""
  });

  const { rejectedFiles, getRootProps, getInputProps } = useDropzone({
    accept: "image/jpeg, image/png"
  });

  // acceptedFiles

  // const acceptedFilesItems = acceptedFiles.map(file => (
  //     file.path
  // ));

  const rejectedFilesItems = rejectedFiles.map(file => file.path);

  const handleChange = e => {
    setFormDeploy({
      ...formDeploy,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="col-lg-12 col-sm-6 col-12 order-lg-6">
      <div className="col-md-3 col-12">
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <em>Arrastra el archivo bpmn acá</em>
        </div>
      </div>
    </div>
  );
};

export default UploadFileForm;
