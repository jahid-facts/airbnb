import { useState } from 'react';
import { Button, Input } from "@mui/material";
//import { postApi } from '../../config/configAxios';

function NIDVerificationForm() {

    const instant_check_api_url = process.env.REACT_APP_OCR_AI_URL;
    //const verified = 'ok';

    const [file, setFile] = useState(null);
    const [fileUploaded, setFileUploaded] = useState(false);


    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file);

        await fetch(instant_check_api_url, {
            method: 'POST',
            body: formData
        }).then(response => response.json())
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


    return (
        <div>
            {fileUploaded
                ? <div className="active-status" style={{ backgroundColor: 'green' }}>Active</div>
                : <form onSubmit={handleSubmit} enctype="multipart/form-data">

                    <label htmlFor="file-upload">
                        <Input
                            type="file"
                            id="file-upload"
                            accept="image/*"
                            onChange={handleFileChange}
                            sx={{ display: 'none' }}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            component="span"
                            style={{ 'marginInline': '0.5rem' }}
                        >
                            Upload NID  File
                        </Button>
                    </label>

                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ 'marginInline': '0.5rem' }}
                        disabled={!file}
                    >
                        Verify
                    </Button>
                </form>
            }
        </div>

    );

}

export default NIDVerificationForm;









    // const uploadImage = async (file, url) => {
    // const formData = new FormData();
    // formData.append('file', file);
    // console.log(formData);

    //     const response = await postApi(url, file);
    //     return response;
    // };


        //     if (!file) {
        //         return;
        //     }
        //     try {
        //         // const response = await uploadImage(file, instant_check_api_url);
        //         const response = await postApi(file, instant_check_api_url);

        //         if (response.status === 200) {
        //             const data = await response.json();
        //             console.log(data);
        //         } else {
        //             console.error(`Failed to upload image: ${response.statusText}`);
        //         }
        //     } catch (error) {
        //         console.error(error);
        //         console.error('Failed to upload image:', error.message);
        //     }
        // }

        // console.log(file)

        
        // await postApi(instant_check_api_url, formData);

        // Handle the response from the API
        // const data = await response.json();
        // console.log(data);