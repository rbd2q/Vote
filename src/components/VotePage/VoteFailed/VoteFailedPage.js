import React from 'react';
import {useHistory} from "react-router-dom";
import {Button} from "@mui/material";

const VoteFailedPage = () => {
  const history = useHistory();

  const handleGetBack = () => {
    history.push('/')
  }
  return (
    <div>
      <Button color='error' onClick={handleGetBack}>Get back to Home Page</Button>
      <h1>Only people from Belarus can take part in this elections</h1>
    </div>
  );
};

export default VoteFailedPage;