import React, { useState } from 'react';
import Varification from './Verification';

function FileUpload() {
    const [file, setFile] = useState(null);
    const [fileUploaded, setFileUploaded] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData();
        formData.append('uploaded_file', file);

        fetch('/upload', { 
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.uploaded) {
                    setFileUploaded(true);
                }
                else {
                    setFileUploaded(false);
                    console.error("Error uploading file");
                }
            })
            .catch(error => {
                setFileUploaded(false);
                console.error(error);
            });
    }

    function handleFileChange(event) {
        setFile(event.target.files[0]);
    }

    return (
        <div> 
            {fileUploaded
                ? <div className="active-status" style={{ backgroundColor: 'green' }}>Active</div>
                : <Varification />
            }
        </div>
    );
}

export default FileUpload;

{/* <form onSubmit={handleSubmit}>
    <input type="file" onChange={handleFileChange} />
    <input type="submit" value="Upload" />
</form> */}