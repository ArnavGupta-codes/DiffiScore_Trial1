import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Upload } from "lucide-react";

const ImageDropArea = () => {
  const onDrop = useCallback((acceptedFiles) => {
    const files = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    console.log(files); // Handle the uploaded files (e.g., display them)
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div
      {...getRootProps()}
      className={`drag-and-drop ${isDragActive ? "drag-active" : ""}`}
    >
      <input {...getInputProps()} />
      <Upload className="upload-icon" />
      <p className="drag-text">
        {isDragActive
          ? "Drop your images here..."
          : "Drag and drop images here, or click to upload"}
      </p>
    </div>
  );
};

export default ImageDropArea;
