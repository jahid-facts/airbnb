import { Typography } from "@mui/material";
import React from "react";
import NIDVerificationForm from "../../pages/reservationEcheck/Verification";

const TenantCheck = ({close}) => {
  return (
    <div>
      <Typography variant="h2" >Tenant Check</Typography>
      <Typography>
        Give us your National Identity Card.
      </Typography>

      <NIDVerificationForm close={close}/>

      
    </div>
  );
};

export default TenantCheck;
