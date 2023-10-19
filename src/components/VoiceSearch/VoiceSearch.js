import * as React from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Mic from '@mui/icons-material/Mic';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from '@mui/material';
import MicOffIcon from '@mui/icons-material/MicOff';
import './VoiceSearch.css';

const modal_style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function VoiceSearch() {
    //  modal start (SN)
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    //  modal end (SN)

    // Speech Recognition start (SN)
    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
    } = useSpeechRecognition();

    if (!browserSupportsSpeechRecognition) {
        return <span>Browser doesn't support speech recognition.</span>;
    }
    // Speech Recognition end (SN)
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
                    onClick={handleOpen}><Mic /></Button>
            </Grid>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={modal_style}>

                    <Paper
                        component="form"
                        sx={{ display: 'flex', alignItems: 'center' }}
                    >
                        <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                            <SearchIcon />
                        </IconButton>
                        <InputBase
                            sx={{ ml: 1, flex: 1 }}
                            placeholder="Search"
                            inputProps={{ 'aria-label': 'search' }}
                        />
                        <p>{transcript}</p>
                        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                        <Button onClick={resetTranscript}>x</Button>
                    </Paper>
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
                </Box>
            </Modal>
        </div >
    );

}
