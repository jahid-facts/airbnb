import { Button, Input } from "@mui/material";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useState, useRef } from "react";

const WebCam = ({ setWebCamFile }) => {
  const [file, setFile] = useState(null);
  const [isImageCaptured, setIsImageCaptured] = useState(false);
  const canvasRef = useRef(null);
  const videoRef = useRef(null);

  const handleFileChange = (event) => {
    //handleSubmit();
  };

  const handleCapture = (event) => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    context.drawImage(video, 0, 0, canvas.width, canvas.height);

    canvas.toBlob(
      (blob) => {
        const file = new File([blob], "capture.jpg", { type: blob.type });
        setFile(file);
        setIsImageCaptured(true);
        stopStream();
        setWebCamFile(file);
        console.log(setWebCamFile);
        //handleSubmit();
      },
      "image/jpeg",
      1
    );
  };

  const startStream = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        const video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const stopStream = () => {
    const video = videoRef.current;
    if (video.srcObject) {
      const tracks = video.srcObject.getTracks();
      tracks.forEach((track) => track.stop());
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isImageCaptured ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          <img
            src={URL.createObjectURL(file)}
            alt="Capture"
            style={{ width: "300px", height: "300px" }}
          />
          <Input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            style={{ margin: "1rem", display: "none" }}
            
          />
        </div>
      ) : (
        <>
          <Button
            variant="outlined"
            onClick={startStream}
            style={{
              color: "black",
              fontWeight: "bold",
              border: "1px solid black",
              borderRadius: "6px",
              padding: "10px",
              textTransform: "capitalize",
              marginTop: "0.5rem",
              marginBottom: "0.5rem",
            }}
          >
            Open Camera
          </Button>

          <video ref={videoRef} style={{ display: "none" }}></video>
          <div>
            <canvas ref={canvasRef} style={{ display: "none" }}></canvas>
            <Button
              type="button"
              variant="contained"
              color="primary"
              style={{ margin: "1rem" }}
              onClick={handleCapture}
            >
              <CameraAltIcon />
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default WebCam;
