import { IconButton, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  AddCircleOutlineOutlined,
  RemoveCircleOutlineOutlined,
} from "@mui/icons-material";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <>
      <IconButton onClick={handleDecrement}>
        <RemoveCircleOutlineOutlined
          sx={{
            color: count > 0 ? "" : "#a1a1a1",
          }}
        />
      </IconButton>
      <Typography
        variant="text"
        mx={"10px"}
        width={"10px"}
        color={count > 0 ? "" : "#a1a1a1"}
      >
        {count}
      </Typography>
      <IconButton onClick={handleIncrement}>
        <AddCircleOutlineOutlined />
      </IconButton>
    </>
  );
};

export default Counter;
