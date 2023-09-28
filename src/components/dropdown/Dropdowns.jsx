import React from 'react';
import MenuItem from '@mui/material/MenuItem';

const Dropdowns = (props) => {
  // const { options, values} = props;
  const { options } = props;


  return (
    <div>
      <select>
        {options.map((option, index) => (
          <MenuItem key={index} value={option}>
            { option }
          </MenuItem>
        ))}
      </select>
    </div>
  );
};

export default Dropdowns;