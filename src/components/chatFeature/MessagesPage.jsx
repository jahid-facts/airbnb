import React, { useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  TextField,
  Button,
} from "@mui/material";

const MessagesPage = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() !== "") {
      setMessages([...messages, newMessage]);
      setNewMessage("");
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Messages
      </Typography>
      <List>
        {messages.map((message, index) => (
          <ListItem key={index}>{message}</ListItem>
        ))}
      </List>
      <TextField
        label="Type your message"
        fullWidth
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSendMessage}>
        Send
      </Button>
    </Container>
  );
};

export default MessagesPage;
