import React, { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { Box, Divider, Link, Typography } from '@mui/material';
import Axios from 'axios';
import CustomDialog from '../../../components/customDialog/CustomDialog';

const PersonalInfo = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => { 
    Axios.get('http://localhost:5050/getUsers')
      .then(users => {setUsers(users.data);})
      .catch (err => console.log(err));
  }, []);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    // for custom dialog 
    const [openUserName, setOpenUserName] = React.useState(false);
    const [openEmail, setOpenEmail] = React.useState(false);
  const [openPhoneNumber, setOpenPhoneNumber] = React.useState(false);
  const [openAddress, setOpenAddress] = React.useState(false);
  const [openContact, setOpenContact] = React.useState(false);
  const [openNId, setOpenNId] = React.useState(false);
  const [selectedDialog, setSelectedDialog] = React.useState("");

  const handleDialogOpen = (dialogType) => {
    setSelectedDialog(dialogType);
    if (dialogType === "userName") {
        setOpenUserName(true);
    } else if (dialogType === "email") {
        setOpenEmail(true);
    } else if (dialogType === "phoneNumber") {
      setOpenPhoneNumber(true);
    } else if (dialogType === "address") {
      setOpenAddress(true);
    } else if (dialogType === "contact") {
        setOpenContact(true);
    } else if (dialogType === "NId") {
        setOpenNId(true);
    }
  };

  const handleDialogClose = (event, reason) => {
    if (reason !== "backdropClick") {
      if (selectedDialog === "userName") {
        setOpenUserName(false);
      } 
      else if (selectedDialog === "email") {
        setOpenEmail(false);
      } 
      else if (selectedDialog === "phoneNumber") {
        setOpenPhoneNumber(false);
      }
      else if (selectedDialog === "address") {
        setOpenAddress(false);
      }
      else if (selectedDialog === "contact") {
        setOpenContact(false);
      }
      else if (selectedDialog === "NId") {
        setOpenNId(false);
      }
    }
  };
    return (
        <>
            <form onSubmit={handleSubmit}>
            {users.map(user => (                
                <Box
                    sx={{
                        boxShadow: 1,   
                        p: 2,
                        m: 1,
                        borderRadius: 2,
                    }}
                >
                     {/* Legal name  */}
                    <Grid container spacing={2}>                  
                        <Grid item xs={12} sm={12}>                       
                            <Typography variant="subtitle1" gutterBottom>
                                Legal name
                            </Typography>                        
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom:'20px' }}>
                            <Typography variant="body1" display="inline">
                            {user.name}
                            </Typography>
                            <Link href="#" underline="always" onClick={() => handleDialogOpen("userName")}>
                            Edit
                            </Link>
                            </div> 
                            <CustomDialog
                                handleClose={handleDialogClose}
                                open={openUserName}
                                title={"Legal Name"}
                                input={
                                    <TextField
                                    id="standard-basic"
                                    label="Legal Name"
                                    value={user.name}
                                    variant="standard"
                                    />
                                }
                                />
                                <Divider />
                        </Grid>
                        {/* email  */}
                        <Grid item xs={12} sm={12}>                       
                        <Typography variant="subtitle1" gutterBottom>
                        Email Address
                        </Typography>                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom:'20px' }}>
                            <Typography variant="body1" display="inline">
                            {user.email}
                            </Typography>
                            <Link href="#" underline="always" onClick={() => handleDialogOpen("email")}>
                        Edit
                        </Link>
                            </div> 
                            <CustomDialog
                                handleClose={handleDialogClose}
                                open={openEmail}
                                title={"Email"}
                                input={
                                    <TextField
                                    id="standard-basic"
                                    label="Email"
                                    value={user.email}
                                    variant="standard"
                                    />
                                }
                                />  
                                <Divider />       
                        </Grid>                         
                        {/* Phone number */}
                        <Grid item xs={12} sm={12}>                       
                        <Typography variant="subtitle1" gutterBottom>
                        Phone Number
                        </Typography>                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom:'20px' }}>
                            <Typography variant="body1" display="inline">
                            {user.phone}
                            </Typography>
                            <Link href="#" underline="always" onClick={() => handleDialogOpen("phoneNumber")}>
                        Edit
                        </Link>
                            </div> 
                            <CustomDialog
                                handleClose={handleDialogClose}
                                open={openPhoneNumber}
                                title={"Phone Number"}
                                input={
                                    <TextField
                                    id="standard-basic"
                                    label="Phone Number"
                                    value={user.phone}
                                    variant="standard"
                                    />
                                }
                                />  
                                <Divider />       
                        </Grid>                         
                        {/* Government ID  */}
                        <Grid item xs={12} sm={12}>                       
                        <Typography variant="subtitle1" gutterBottom>
                        Government ID
                        </Typography>                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom:'20px' }}>
                            <Typography variant="body1" display="inline">
                            {user.NId}
                            </Typography>
                            <Link href="#" underline="always" onClick={() => handleDialogOpen("NId")}>
                        Edit
                        </Link>
                            </div> 
                            <CustomDialog
                                handleClose={handleDialogClose}
                                open={openNId}
                                title={"Government ID"}
                                input={
                                    <TextField
                                    id="standard-basic"
                                    label="Government ID"
                                    value={user.NId}
                                    variant="standard"
                                    />
                                }
                                />  
                                <Divider />       
                        </Grid>                         
                        {/* Address  */}
                        <Grid item xs={12} sm={12}>                       
                        <Typography variant="subtitle1" gutterBottom>
                        Address
                        </Typography>                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom:'20px' }}>
                            <Typography variant="body1" display="inline">
                            {user.address}
                            </Typography>
                            <Link href="#" underline="always" onClick={() => handleDialogOpen("address")}>
                        Edit
                        </Link>
                            </div> 
                            <CustomDialog
                                handleClose={handleDialogClose}
                                open={openAddress}
                                title={"Address"}
                                input={
                                    <TextField
                                    id="standard-basic"
                                    label="Address"
                                    value={user.address}
                                    variant="standard"
                                    />
                                }
                                />  
                                <Divider />       
                        </Grid>                         
                        {/* Emergency contact */}
                        <Grid item xs={12} sm={12}>                       
                        <Typography variant="subtitle1" gutterBottom>
                        Emergency contact
                        </Typography>                        
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom:'20px' }}>
                            <Typography variant="body1" display="inline">
                            {user.contact}
                            </Typography>
                            <Link href="#" underline="always" onClick={() => handleDialogOpen("contact")}>
                        Edit
                        </Link>
                            </div> 
                            <CustomDialog
                                handleClose={handleDialogClose}
                                open={openContact}
                                title={"Emergency contact"}
                                input={
                                    <TextField
                                    id="standard-basic"
                                    label="Emergency contact"
                                    value={user.contact}
                                    variant="standard"
                                    />
                                }
                                />  
                                <Divider />       
                        </Grid> 
                    </Grid>
                </Box>
                ))}
            </form>            
        </>
    );
};

export default PersonalInfo;
