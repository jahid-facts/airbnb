import React, { useState, useEffect } from "react";
import { Button, Input } from "@mui/material";
import WebCam from "../../components/webcam";
import { useAuthInfo } from "../../helpers/AuthCheck";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import { getApi, getApiById } from "../../config/configAxios";

function NIDVerificationForm({ bookingId, bookinStatus, mode }) {
  
  const api_url = mode === "check" ? "http://127.0.0.1:7050/api/idVerification/check" : "http://127.0.0.1:7050/api/idVerification/update";
    
  // const update_url = process.env.REACT_APP_STATUS_ENDPOINT;
  // const delete_url = process.env.REACT_APP_DELETE_ENDPOINT;


  const location = useLocation();
  const [file, setFile] = useState(null);
  const UserInfo = useAuthInfo();
  //console.log(UserInfo);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [capturedFile, setCapturedFile] = useState(null);

  const [bookingStatus, setBookingStatus] = useState(null);
  const [idStatus, setIdStatus] = useState(null); 

  useEffect(() => {
    
    setBookingStatus(bookinStatus);
    console.log(bookinStatus);
  }, [bookinStatus]);



  useEffect(() => {
    setIdStatus(UserInfo.status)
  }, [idStatus]);


  //console.log(UserInfo._id);
  //console.log(propertyId);

// booking status update
  const handleStatusUpdate = () =>{
    axios
    .post("http://localhost:5050/api/booking-status-update", {  //${process.env.REACT_APP_BASE_URL}

        bookingId: bookingId,
        // invoiceId: invoiceId,
    
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });
  }



//   /booking-delete
const handleStatusDelete = () =>{
  axios
  .post("http://localhost:5050/api/booking-delete", {  //${process.env.REACT_APP_BASE_URL}

      bookingId: bookingId,
  
  })
  .then((response) => {
    console.log(response.data);
  })
  .catch((error) => {
    console.error(error);
  });
}


  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
    setFileUploaded(false); // reset file uploaded state
  };

  const handleWebCamFile = (file) => {
    setCapturedFile(file);
    setFileUploaded(false); // reset file uploaded state
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    if (file) {
      if (!mode === "check") {
        formData.append("file", file);
        
      } else {
        formData.append("file", file);
        formData.append("userId", UserInfo._id);
      }
    } else if (capturedFile) {
      if (!mode === "check") {
        formData.append("file", capturedFile);
        
      } else {
        formData.append("file", capturedFile);
        formData.append("userId", UserInfo._id);
      }
    } else {
      console.error("Please upload a file or capture an image.");
      return;
    }

    try {
      const response = await fetch(api_url, {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        console.error(
          "Failed to send image. Server responded with " + response.status
        );
        return;
      }

      const data = await response.json();
      if (data.success === "Id Found") {
        console.log(data.success)
        // bookings
        setBookingStatus("active");
        handleStatusUpdate();
        setFileUploaded(true);
      } else if (data.success === "NID OCR is completed! and stored") {
        //
        setFileUploaded(true);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };
console.log("book",bookingStatus, "id ",idStatus)
  return (
    <div>
      {/* {fileUploaded ||( bookingStatus & idStatus ) === "active" ? ( */}
      { fileUploaded|| idStatus  === "active" ? (
        <div className="active-status" 
        style={{
          backgroundColor: "green",
          textAlign: "center",
          padding: "10px",
          borderRadius:"15px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px"
        }}>
          {location.pathname==="/profile" ? "VERIFIED" : bookingStatus && "RENTED"}
        </div>
      ) : (
        <form
          encType="multipart/form-data"
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            //flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <WebCam setWebCamFile={handleWebCamFile} />

            <label htmlFor="file-upload">
              <Input
                type="file"
                id="file-upload"
                accept="image/*"
                onChange={handleFileChange}
                sx={{ display: "none" }}
              />
              <Button
                variant="contained"
                color="primary"
                component="span"
                style={{ marginInline: "0.5rem" }}
              >
                Choose NID file
              </Button>
            </label>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ margin: "0.5rem" }}
              disabled={!file && !capturedFile}
            >
              {mode === "check" ? "Validate NID" : "Upload NID"}
            </Button>


            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick={handleStatusDelete}
              style={{ margin: "0.5rem" }}
              disabled={!file && !capturedFile}
            >
              Cancel Book-in
            </Button>


          </div>
        </form>
      )}
    </div>
  );
}

export default NIDVerificationForm;

// import { useState } from 'react';
// import { Button, Input } from "@mui/material";

// function NIDVerificationForm() {

//     const instant_check_api_url = process.env.REACT_APP_OCR_AI_URL;
//     const [file, setFile] = useState(null);
//     const [fileUploaded, setFileUploaded] = useState(false);

//     const handleFileChange = (event) => {
//         setFile(event.target.files[0]);
//     }

//     const handleCapture = async () => {
//         const stream = await navigator.mediaDevices.getUserMedia({video: true});
//         const video = document.createElement('video');
//         const canvas = document.createElement('canvas');
//         video.srcObject = stream;
//         video.play();
//         video.onloadedmetadata = () => {
//             canvas.width = video.videoWidth;
//             canvas.height = video.videoHeight;
//             canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
//             canvas.toBlob((blob) => {
//                 const file = new File([blob], 'capture.jpg', {type: blob.type});
//                 setFile(file);
//             }, 'image/jpeg', 1);
//             video.srcObject.getVideoTracks().forEach(track => track.stop());
//         };
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const formData = new FormData();
//         formData.append('file', file);

//         await fetch(instant_check_api_url, {
//             method: 'POST',
//             body: formData,
//         })
//             .then(response => response.json())
//             .then(data => {
//                 if (data.uploaded) {
//                     setFileUploaded(true);
//                 } else {
//                     setFileUploaded(false);
//                     console.error("Error uploading file");
//                 }
//             })
//             .catch(error => {
//                 setFileUploaded(false);
//                 console.error(error);
//             });
//     }

//     return (
//         <div>
//             {fileUploaded
//                 ? <div className="active-status" style={{ backgroundColor: 'green' }}>Active</div>
//                 : <form onSubmit={handleSubmit} encType="multipart/form-data">

//                     <label htmlFor="file-upload">
//                         <Input
//                             type="file"
//                             id="file-upload"
//                             accept="image/*"
//                             onChange={handleFileChange}
//                             sx={{ display: 'none' }}
//                         />
//                         <Button
//                             variant="contained"
//                             color="primary"
//                             component="span"
//                             style={{ 'marginInline': '0.5rem' }}
//                         >
//                             Upload NID File
//                         </Button>
//                     </label>

//                     <Button
//                         variant="contained"
//                         color="primary"
//                         style={{ 'marginInline': '0.5rem' }}
//                         onClick={handleCapture}
//                     >
//                         Capture
//                     </Button>

//                     <Button
//                         type="submit"
//                         variant="contained"
//                         color="primary"
//                         style={{ 'marginInline': '0.5rem' }}
//                         disabled={!file}
//                     >
//                         Verify
//                     </Button>
//                 </form>
//             }
//         </div>
//     );
// }

// export default NIDVerificationForm;

// import { useState } from 'react';
// import { Button, Input } from "@mui/material";
// //import { postApi } from '../../config/configAxios';

// function NIDVerificationForm() {

//     const instant_check_api_url = process.env.REACT_APP_OCR_AI_URL;
//     //const verified = 'ok';

//     const [file, setFile] = useState(null);
//     const [fileUploaded, setFileUploaded] = useState(false);

//     const handleFileChange = (event) => {
//         setFile(event.target.files[0]);
//     }

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         const formData = new FormData();
//         formData.append('file', file);
//         // console.log(file)

//         await fetch(instant_check_api_url, {
//             method: 'POST',
//             // headers:{"content-type":"application/json"},
//             //'Content-Type', 'multipart/form-data'
//             body: formData
//         }).then(response => response.json())
//             .then(data => {
//                 console.log(data)
//                 if (data.success) {
//                     setFileUploaded(true);
//                 }
//                 else {
//                     setFileUploaded(false);
//                     console.error("Error uploading file");
//                 }
//             })
//             .catch(error => {
//                 setFileUploaded(false);
//                 console.error(error);
//             });

//     }

//     return (
//         <div>
//             {fileUploaded
//                 ? <div className="active-status" style={{ backgroundColor: 'green' }}>Active</div>
//                 : <form onSubmit={handleSubmit} encType="multipart/form-data">

//                     <label htmlFor="file-upload">
//                         <Input
//                             type="file"
//                             id="file-upload"
//                             accept="image/*"
//                             onChange={handleFileChange}
//                             sx={{ display: 'none' }}
//                         />
//                         <Button
//                             variant="contained"
//                             color="primary"
//                             component="span"
//                             style={{ 'marginInline': '0.5rem' }}
//                         >
//                             Upload NID  File
//                         </Button>
//                     </label>

//                     <Button
//                         type="submit"
//                         variant="contained"
//                         color="primary"
//                         style={{ 'marginInline': '0.5rem' }}
//                         disabled={!file}
//                     >
//                         Verify
//                     </Button>
//                 </form>
//             }
//         </div>

//     );

// }

// export default NIDVerificationForm;

//     // const uploadImage = async (file, url) => {
//     // const formData = new FormData();
//     // formData.append('file', file);
//     // console.log(formData);

//     //     const response = await postApi(url, file);
//     //     return response;
//     // };

//         //     if (!file) {
//         //         return;
//         //     }
//         //     try {
//         //         // const response = await uploadImage(file, instant_check_api_url);
//         //         const response = await postApi(file, instant_check_api_url);

//         //         if (response.status === 200) {
//         //             const data = await response.json();
//         //             console.log(data);
//         //         } else {
//         //             console.error(`Failed to upload image: ${response.statusText}`);
//         //         }
//         //     } catch (error) {
//         //         console.error(error);
//         //         console.error('Failed to upload image:', error.message);
//         //     }
//         // }

//         // console.log(file)

//         // await postApi(instant_check_api_url, formData);

//         // Handle the response from the API
//         // const data = await response.json();
//         // console.log(data);
