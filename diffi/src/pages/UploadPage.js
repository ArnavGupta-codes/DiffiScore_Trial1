import React from 'react'
import ImageDropArea from "../components/ImageDropArea";

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
                <button class='uploadbtn Intro'>Upload</button>
            </div>
        </div>
    )
} 

export default UploadPage