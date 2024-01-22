import React, { useState, useEffect, useRef } from 'react';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

const ChatWindow = ({ onClose }) => {
  const [userInput, setUserInput] = useState('');
  const [chatMessages, setChatMessages] = useState([]);
  const chatContainerRef = useRef(null);
  const REACT_APP_AI_URL = process.env.REACT_APP_AI_URL;

  const handleSend = async () => {
    if (userInput.trim() !== '') { 
      try {
        const response = await axios.post(REACT_APP_AI_URL+"/chat_bot", { text: userInput });
        const chatResponse = response.data.response;
        setChatMessages([...chatMessages, { text: userInput, type: 'user' }, { text: chatResponse, type: 'bot' }]);
        setUserInput('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  useEffect(() => {
    // Scroll to the bottom when a new message comes in
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      handleSend();
    }
  };

  return (
    <Paper elevation={3} style={{ position: 'fixed', bottom: '20px', right: '20px', width: '50%', height: '90%', backgroundColor: '#fff', zIndex: 9990 }}>
      <div ref={chatContainerRef} style={{ maxHeight: 'calc(100% - 120px)', overflowY: 'scroll', height: '100%' }}>
        {chatMessages.map((message, index) => (
          <div key={index} style={{ padding: '10px', textAlign: message.type === 'user' ? 'right' : 'left' }}>
            <span style={{ backgroundColor: message.type === 'user' ? '#ccf2ff' : '#f0f0f0', padding: '5px 10px', borderRadius: '5px', display: 'inline-block' }}>
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', padding: '10px' }}>
        <TextField
          fullWidth
          variant="outlined"
          label="Type your message"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={{ flex: 1 }}
        />
        
        <Button 
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
          style={{ marginLeft: '10px' }}
          onClick={handleSend}
        >
          Send
        </Button>
      </div>
    </Paper>
  );
};

export default ChatWindow;
