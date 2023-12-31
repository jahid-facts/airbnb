import "./ShareThisPlace.css";
import React from "react";
import copy from "../../assets/images/copy.png";
import mail from "../../assets/images/mail.png";
import message from "../../assets/images/messages.png";
import facebook from "../../assets/images/facebook.png";
import whatsapp from "../../assets/images/whatsapp.png";
import messenger from "../../assets/images/messenger.png";
import twitter from "../../assets/images/twitter.png";
import embed from "../../assets/images/application.png";
import { Box, Grid } from "@mui/material";
import { toast } from "react-toastify";

const ShareThisPlace = ({ propertyValues }) => {
  const copyLink = () => {
    const domain = window.location.href;
    // Create a temporary input element
    const tempInput = document.createElement("input");
    tempInput.value = domain;

    // Append the input element to the DOM
    document.body.appendChild(tempInput);

    // Select the input text
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    toast("Link copied!");
  };

  const sendEmail = () => {
    const domain = window.location.href;
    // Create a mailto link with the subject and body
    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=&su=Check%20out%20this%20link&body=${encodeURIComponent(
      domain
    )}`;
    // Open the default email client with the mailto link
    window.location.href = mailtoLink;
    console.log("Email clicked");
    window.open(mailtoLink, "_blank");
  };

  const sendSMS = () => {
    const domain = window.location.href;

    // Create an SMS link with the body
    const smsLink = `sms:?&body=${encodeURIComponent(
      `Check out this link: ${domain}`
    )}`;

    // Open the default messaging app with the SMS link
    const popup = window.open(smsLink, "_blank");

    // Check if the popup was blocked
    if (!popup || popup.closed || typeof popup.closed === "undefined") {
      window.alert("Failed to open SMS. Please check your browser settings.");
    } else {
      // Show alert
      window.alert("SMS clicked");
    }
  };

  const sendWhatsApp = () => {
    const domain = window.location.href;

    // Create a WhatsApp share link with the message content
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(
      `Check out this link: ${domain}`
    )}`;

    // Open the default browser with the WhatsApp link
    window.location.href = whatsappLink;

    window.open(whatsappLink, "_blank");
  };
  const sendMessenger = async ({ propertyValues }) => {
    const messengerLink =
      "https://www.facebook.com/dialog/send?link=" +
      encodeURIComponent(window.location.href);

    try {
      await navigator.share({
        title: "Check out this link",
        text: window.location.href,
      });
    } catch (error) {
      // Fallback for browsers that do not support the Web Share API
      // Open the Messenger link in a new window
      window.open(messengerLink, "_blank");
    }
  };

  const shareOnFacebook = () => {
    // URL to be shared on Facebook
    const shareUrl = window.location.href;

    // Facebook Share Dialog URL
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}`;

    // Open the Facebook Share Dialog in a new window
    window.open(facebookShareUrl, "_blank");
  };

  const shareOnTwitter = () => {
    // Text and URL to be shared on Twitter
    const tweetText = "Check out this link:";
    const tweetUrl = window.location.href;

    // Twitter Web Intent URL
    const twitterIntentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}&url=${encodeURIComponent(tweetUrl)}`;

    // Open the Twitter Web Intent in a new window
    window.open(twitterIntentUrl, "_blank");
  };

  const copyEmbedCode = () => {
    // Link to be embedded
    const embedUrl = window.location.href;

    // Generate HTML code for embedding
    const embedHtmlCode = `<iframe src="${embedUrl}" width="600" height="400" frameborder="0" scrolling="no"></iframe>`;

    // Create a temporary input element
    const tempInput = document.createElement("textarea");
    tempInput.value = embedHtmlCode;

    // Append the input element to the DOM
    document.body.appendChild(tempInput);

    // Select the input text
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text to the clipboard
    document.execCommand("copy");

    // Remove the temporary input element
    document.body.removeChild(tempInput);

    // Show alert
    toast("Embed code copied!");
  };

  console.log(propertyValues);
  return (
    <div className="share-this-place-button">
      <div className="header">
        <h2>Share this place</h2>
      </div>
      <div className="infos">
        <img src={propertyValues.images[0].url} alt="Property" />
        <p>
          {`${propertyValues?.guests.guests} guests, ${propertyValues?.guests.bathrooms} bathrooms, ${propertyValues?.guests.bedrooms} bedrooms, ${propertyValues?.guests.beds} beds`}
        </p>
      </div>

      <div className="sharing-buttons">
        <Grid container spacing={2}>
          <Grid item md={6} xs={12}>
            <Box
              p={2}
              display={"flex"}
              borderRadius={"8px"}
              border={"1px solid #a9a9a9"}
              onClick={copyLink}
              position={"relative"}
              sx={{ cursor: "pointer" }}
            >
              <img
                style={{
                  display: "inline-block",
                }}
                width={"30px"}
                src={copy}
                alt=""
              />
              <span style={{ padding: "4px" }}>Copy Link</span>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              p={2}
              display={"flex"}
              borderRadius={"8px"}
              border={"1px solid #a9a9a9"}
              onClick={sendEmail}
              position={"relative"}
              sx={{ cursor: "pointer" }}
            >
              <img
                style={{
                  display: "inline-block",
                }}
                width={"30px"}
                src={mail}
                alt=""
              />
              <span style={{ padding: "4px" }}>Email</span>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              p={2}
              display={"flex"}
              borderRadius={"8px"}
              border={"1px solid #a9a9a9"}
              onClick={sendSMS}
              position={"relative"}
              sx={{ cursor: "pointer" }}
            >
              <img
                style={{
                  display: "inline-block",
                }}
                width={"30px"}
                src={message}
                alt=""
              />
              <span style={{ padding: "4px" }}>Messages</span>
            </Box>
          </Grid>

          <Grid item md={6} xs={12}>
            <Box
              p={2}
              display={"flex"}
              borderRadius={"8px"}
              border={"1px solid #a9a9a9"}
              onClick={sendWhatsApp}
              position={"relative"}
              sx={{ cursor: "pointer" }}
            >
              <img
                style={{
                  display: "inline-block",
                }}
                width={"30px"}
                src={whatsapp}
                alt=""
              />
              <span style={{ padding: "4px" }}>WhatsApp</span>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              p={2}
              display={"flex"}
              borderRadius={"8px"}
              border={"1px solid #a9a9a9"}
              onClick={sendMessenger}
              position={"relative"}
              sx={{ cursor: "pointer" }}
            >
              <img
                style={{
                  display: "inline-block",
                }}
                width={"30px"}
                src={messenger}
                alt=""
              />
              <span style={{ padding: "4px" }}>Messenger</span>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              p={2}
              display={"flex"}
              borderRadius={"8px"}
              border={"1px solid #a9a9a9"}
              onClick={shareOnFacebook}
              position={"relative"}
              sx={{ cursor: "pointer" }}
            >
              <img
                style={{
                  display: "inline-block",
                }}
                width={"30px"}
                src={facebook}
                alt=""
              />
              <span style={{ padding: "4px" }}>Facebook</span>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              p={2}
              display={"flex"}
              borderRadius={"8px"}
              border={"1px solid #a9a9a9"}
              onClick={shareOnTwitter}
              position={"relative"}
              sx={{ cursor: "pointer" }}
            >
              <img
                style={{
                  display: "inline-block",
                }}
                width={"30px"}
                src={twitter}
                alt=""
              />
              <span style={{ padding: "4px" }}>Twitter</span>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              p={2}
              display={"flex"}
              borderRadius={"8px"}
              border={"1px solid #a9a9a9"}
              onClick={copyEmbedCode}
              position={"relative"}
              sx={{ cursor: "pointer" }}
            >
              <img
                style={{
                  display: "inline-block",
                }}
                width={"30px"}
                src={embed}
                alt=""
              />
              <span style={{ padding: "4px" }}>Embed</span>
            </Box>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default ShareThisPlace;
