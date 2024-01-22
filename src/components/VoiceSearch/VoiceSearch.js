import * as React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Mic from '@mui/icons-material/Mic';
import Paper from '@mui/material/Paper';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Dialog, DialogContent, 
    DialogTitle, Grid, TextField } from '@mui/material';
import MicOffIcon from '@mui/icons-material/MicOff';
import './VoiceSearch.css';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import CloseIcon from '@mui/icons-material/Close';

export default function VoiceSearch() {
  
    //  modal start (SN)
    const [showModal, setShowModal] = useState(false);
    //  modal end (SN)
      
    // text search start (SN) 
    const [searchQuery, setSearchQuery] = useState('');
    const [propertyData, setPropertyData] = useState([]);
    const [message, setMessage] = useState('');
    const REACT_APP_AI_URL = process.env.REACT_APP_AI_URL;

    // Speech Recognition start (SN)
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();
    useEffect(()=>{
        setSearchQuery(transcript)
    },[transcript])
    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    // Speech Recognition end (SN)

    const handleTextSearch = async () => {
        try {
            const response = await axios.get(`${REACT_APP_AI_URL}/search?searchText=${searchQuery}`);
            console.log('API Response:', response.data);   

            const searchData = response.data;
            setPropertyData(searchData);

            window.location.href = `/search-results?q=${searchQuery}`;
    
            if (!searchData || searchData.length === 0) {
                setMessage('No matching property data found.');
                setPropertyData([]);  // Clear existing data
            } else {
                setMessage('');
            }
        } catch (error) {
            console.error('Error with text search:', error);
            console.log('API Response:', error.response);
            setMessage('Error in API response. Please check the server logs for details.');
        }
    };   
    // text search end (SN) 

    // modal start (sn)
    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);
    
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleTextSearch();
        }
    };
//   modal end (sn)
    return (
        <div>
            <Grid>
                <Button
                    sx={{
                        width: "30px",
                        height: "60px",
                        borderRadius: "50%",
                        background: "#fbfbfb"
                    }}
                    onClick={handleOpenModal}><Mic /></Button>
            </Grid>
            <Dialog open={showModal} onClose={handleCloseModal}>
                <DialogTitle>
                    <Box display="flex" justifyContent="space-between" alignItems="center">
                        <Typography variant="h6">Search</Typography>
                        <IconButton onClick={handleCloseModal}>
                        <CloseIcon />
                        </IconButton>
                    </Box>
                </DialogTitle>
                <DialogContent>                    
                <Box >                   
                    <Paper
                            component="form"
                            sx={{ display: 'flex', alignItems: 'center' }}
                        >
                            <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                <SearchIcon />
                            </IconButton>
                            <TextField                        
                            autoFocus
                            placeholder="Search..."
                            onKeyPress={handleKeyPress}
                            inputProps={{ 'aria-label': 'search' }}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            />                                     
                            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />       
                        <Button onClick={handleTextSearch}>Search</Button>
                        <Button onClick={resetTranscript}>x</Button>
                    </Paper> 
                    {/* speech recognition start (sn)*/}
                    <Typography fontSize="10px" mt={2}>
                        Microphone: {listening ? <Mic /> : <MicOffIcon />}
                    </Typography>
                    <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Speak Now
                        </Typography>
                        <Typography id="modal-modal-description" className='snMic' sx={{ m: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                            <Mic />
                        </Typography>
                        <Button onClick={SpeechRecognition.startListening}>Start</Button>
                        <Button onClick={SpeechRecognition.stopListening}>Stop</Button>
                    </Box>
                    {/* speech recognition end (sn)*/}
                </Box>
                </DialogContent>
            </Dialog>
        </div >
    );
}