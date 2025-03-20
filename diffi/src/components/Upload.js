import React from 'react'
import { useNavigate } from "react-router-dom";

const Upload = () => {
  const navigate = useNavigate();
    const goToUploadPage = () => {
      navigate("/upload");
    };
  return (
    <div className="upload">
      <img src="/images/upload.png" width="190vw" height="210vh" />
      <button class="Upload" onClick={goToUploadPage}>
        UPLOAD QUESTIONS
      </button>
    </div>
  );
}

export default Upload
