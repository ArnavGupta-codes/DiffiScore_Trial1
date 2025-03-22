
import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Upload, X } from "lucide-react";

const ImageDropArea = ({ onFileSelect, reset, onResetComplete }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (reset) {
      setImages([]);
      onResetComplete();
    }
  }, [reset, onResetComplete]);

  const onDrop = useCallback(
    (acceptedFiles) => {
      const newImages = acceptedFiles.map((file) => {
        onFileSelect(file);
        return Object.assign(file, {
          preview: URL.createObjectURL(file),
        });
      });
      setImages((prev) => [...prev, ...newImages]);
    },
    [onFileSelect]
  );

  const removeImage = (index) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/*",
  });

  return (
    <div className="dropzone-container">
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
      <div className="image-preview-container">
        {images.map((file, index) => (
          <div key={index} className="image-preview">
          <img src={file.preview} alt="Uploaded" className="preview-img" />
          <button className="remove-btn" onClick={() => removeImage(index)}>
          <X size={12} />
          </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageDropArea;