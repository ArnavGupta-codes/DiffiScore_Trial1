import React from 'react'
import ImageDropArea from "../components/ImageDropArea";

const uploadFile = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const response = await fetch("http://127.0.0.1:8000/upload/", {
        method: "POST",
        body: formData,
      });
  
      const data = await response.json();
      console.log("Upload Success:", data);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };
  
  // Example usage: Attach this function to an input field
//   <input type="file" onChange={(e) => uploadFile(e.target.files[0])} />
  

const UploadPage = () => {
    return(
        <div className='UploadPage'>
            <div className='Intro'>
                <h1 className='Intro'>Upload Files</h1>
            </div>
            <div className='main_section_upload'>
                {/* <button class='selectbutton'>Select Image to Upload</button> */}
                <div className="draganddrop">
                <ImageDropArea />
                </div>
                <button class='uploadbtn Intro' onChange={(e) => uploadFile(e.target.files[0])}>Upload</button>
            </div>
        </div>
    )
} 

export default UploadPage