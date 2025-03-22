import React, { useState } from "react";
import ImageDropArea from "../components/ImageDropArea";

const uploadFile = async (file, tag, setMessage) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("tag", tag);

  try {
    const response = await fetch(`http://127.0.0.1:8000/upload/?tag=${tag}`, {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log("Upload Success:", data);
    setMessage(`✅ Image uploaded successfully! Tag: ${tag}`);
  } catch (error) {
    console.error("Error uploading file:", error);
    setMessage("❌ Upload failed. Please try again.");
  }
};

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [tag, setTag] = useState("");
  const [message, setMessage] = useState("");

  const handleUpload = () => {
    if (selectedFile && tag) {
      uploadFile(selectedFile, tag, setMessage);
    } else {
      setMessage("⚠️ Please select a file and enter a tag.");
    }
  };

  return (
    <div className="UploadPage">
      <h1 className="Intro">Upload Files</h1>

      {/* Input for Tag */}
      <input
        type="text"
        placeholder="Enter tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        className="tag-input"
      />

      {/* Drag & Drop Component */}
      <ImageDropArea onFileSelect={setSelectedFile} />

      {/* Upload Button */}
      <button className="uploadbtn" onClick={handleUpload}>
        Upload
      </button>

      {/* Message Display */}
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default UploadPage;
