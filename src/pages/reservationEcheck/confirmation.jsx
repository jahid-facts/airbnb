import React, { useState } from "react";
import Verification from "./Verification";
import { useLocation } from "react-router-dom";
import { useAuthInfo } from "../../helpers/AuthCheck";

function Confirmation(bookinStatu, mode) {
  const location = useLocation();
  const UserInfo = useAuthInfo();

  // const [idStatus, setIdStatus] = useState(null);


  // useEffect(() => {
  //   setIdStatus(UserInfo.status);
    
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [idStatus]);

  //console.log("bookinStatus",bookinStatu);

  const displayStatus = () => {
   
    //const bookingStatus = bookinStatu;
    if (location.pathname === "/profile" && UserInfo.status === "active") {
      return "VERIFIED";
    }  else {
      return <Verification mode={"update"} />; // or display your verification form here
    }
  };

  return (
    <div
      className="active-status"
      style={{
        backgroundColor: location.pathname !== '/profile' ? "#FFA500" : "#4CAF50",
        color: location.pathname !== '/profile' ? '#fff': '#000',
        textAlign: "center",
        padding: "10px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
      }}
     //value ={bookingId}
    >
      {displayStatus()}
    </div>
  );
}
export default Confirmation;

// import React, { useState } from 'react';
// import Varification from './Verification';

// function FileUpload() {
//     const [file, setFile] = useState(null);
//     const [fileUploaded, setFileUploaded] = useState(false);

//     function handleSubmit(event) {
//         event.preventDefault();

//         const formData = new FormData();
//         formData.append('uploaded_file', file);

//         fetch('/upload', {
//             method: 'POST',
//             body: formData
//         })
//             .then(response => response.json())
//             .then(data => {
//                 if (data.uploaded) {
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

//     function handleFileChange(event) {
//         setFile(event.target.files[0]);
//     }

//     return (
//         <div>
//             {fileUploaded
//                 ? <div className="active-status" style={{ backgroundColor: 'green' }}>Active</div>
//                 : <Varification />
//             }
//         </div>
//     );
// }

// export default FileUpload;

// {
//   /* <form onSubmit={handleSubmit}>
//     <input type="file" onChange={handleFileChange} />
//     <input type="submit" value="Upload" />
// </form> */
// }
