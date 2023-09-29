import React , { useState } from 'react';
import { MuiFileInput } from 'mui-file-input';
import { requirePropFactory } from '@mui/material';



const fileUpload = () => {
const [value, setValue] = useState(null);

const handleChange = (newValue) => {
  setValue(newValue)
}

return <MuiFileInput value={value} onChange={handleChange} />
}


export default fileUpload