import React from 'react';
import Fab from '@mui/material/Fab';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer'; // Using a different icon

const ChatButton = ({ onClick }) => {
  return (
    <Fab color="primary" aria-label="chat" onClick={onClick} style={{ position: 'fixed', bottom: '20px', right: '20px',zIndex:9999 }}>
      <QuestionAnswerIcon />
    </Fab>
  );
};

export default ChatButton;
