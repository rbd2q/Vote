import React from 'react';
import {Button} from "@mui/material";
import {useHistory} from "react-router-dom";

const VoteCompletedPage = () => {
  const history = useHistory();

  const handleGetBack = () => {
    history.push('/')
  }
  return (
    <div>
      <Button color='error' onClick={handleGetBack}>Get back to Home Page</Button>
      <h1>Thank you for your vote!</h1>
    </div>
  );
};

export default VoteCompletedPage;