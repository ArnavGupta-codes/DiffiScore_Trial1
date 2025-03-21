import React, { useState } from "react";
import ImageDropArea from "../components/ImageDropArea";

const uploadFile = async (file, tag, setMessage) => {
    if (!file || !tag) {
        setMessage("⚠️ Please select a file and enter a tag.");
        return;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("tag", tag);

    try {
        const response = await fetch("http://127.0.0.1:8000/upload/", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        console.log("Upload Response:", data);
        
        if (response.ok) {
            setMessage(`✅ Image uploaded successfully! Tag: ${tag}`);
        } else {
            setMessage(`❌ Upload failed: ${data.error || "Server error"}`);
        }
    } catch (error) {
        console.error("Error uploading file:", error);
        setMessage("❌ Upload failed. Please try again.");
    }
};

const UploadPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const [tag, setTag] = useState("");
    const [message, setMessage] = useState("");

    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
    };

    const handleUpload = () => {
        uploadFile(selectedFile, tag, setMessage);
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
            />

            {/* File Selection */}
            <input type="file" onChange={handleFileChange} />

            {/* Drag & Drop Component */}
            <ImageDropArea onFileSelect={setSelectedFile} />  {/* 🔹 Pass setter here */}

            {/* Upload Button */}
            <button className="uploadbtn" onClick={handleUpload}>Upload</button>

            {/* Message Display */}
            {message && <p>{message}</p>}
        </div>
    );
};  

export default UploadPage;




// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { Upload } from "lucide-react";

// const ImageDropArea = () => {
//   const [files, setFiles] = useState([]);

//   const onDrop = useCallback((acceptedFiles) => {
//     const mappedFiles = acceptedFiles.map((file) =>
//       Object.assign(file, {
//         preview: URL.createObjectURL(file),
//       })
//     );
//     setFiles((prevFiles) => [...prevFiles, ...mappedFiles]);
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: "image/*",
//   });

//   const handleSubmit = () => {
//     console.log("Submitting files:", files);
//     // Add your submission logic here (e.g., upload to a server)
//   };

//   return (
//     <div className="container">
//       <div
//         {...getRootProps()}
//         className={`drag-and-drop ${isDragActive ? "drag-active" : ""}`}
//       >
//         <input {...getInputProps()} />
//         <Upload className="upload-icon" />
//         <p className="drag-text">
//           {isDragActive
//             ? "Drop your images here..."
//             : "Drag and drop images here, or click to upload"}
//         </p>
//       </div>

//       {files.length > 0 && (
//         <div className="uploaded-files-container">
//           <h3>Uploaded Files:</h3>
//           <div className="uploaded-files">
//             {files.map((file, index) => (
//               <div key={index} className="file-item">
//                 <img
//                   src={file.preview}
//                   alt={file.name}
//                   className="file-preview"
//                 />
//                 <p>{file.name}</p>
//               </div>
//             ))}
//           </div>
//           <button onClick={handleSubmit} className="submit-button">
//             Submit
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ImageDropArea;

// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { Upload, X } from "lucide-react";

// const ImageDropArea = () => {
//   const [images, setImages] = useState([]);

//   const onDrop = useCallback((acceptedFiles) => {
//     const newImages = acceptedFiles.map((file) =>
//       Object.assign(file, {
//         preview: URL.createObjectURL(file),
//       })
//     );
//     setImages((prev) => [...prev, ...newImages]); // Append new images
//   }, []);

//   const removeImage = (index) => {
//     setImages((prev) => prev.filter((_, i) => i !== index));
//   };

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: "image/*",
//   });

//   return (
//     <div className="dropzone-container">
//       {/* Drag & Drop Area */}
//       <div
//         {...getRootProps()}
//         className={`drag-and-drop ${isDragActive ? "drag-active" : ""}`}
//       >
//         <input {...getInputProps()} />
//         <Upload className="upload-icon" />
//         <p className="drag-text">
//           {isDragActive
//             ? "Drop your images here..."
//             : "Drag and drop images here, or click to upload"}
//         </p>
//       </div>

//       {/* Image Preview */}
//       <div className="image-preview-container">
//         {images.map((file, index) => (
//           <div key={index} className="image-preview">
//             <img src={file.preview} alt="Uploaded" className="preview-img" />
//             <button className="remove-btn" onClick={() => removeImage(index)}>
//               <X size={16} />
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageDropArea;
