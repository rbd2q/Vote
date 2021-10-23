import React from 'react';
import {useHistory} from "react-router-dom";
import styles from './VotePage.module.scss'
import {Button} from "@mui/material";
import VoteField from "./VoteField";

const VotePage = () => {
  const history = useHistory();

  const handleGetBack = () => {
    history.push('/')
  }

  return (
    <div>
      <Button color='error' onClick={handleGetBack}>Get back</Button>
      <div className={styles.formWrapper}>
        <p>White down your Passport Number and choose your Candidate!</p>
        <VoteField/>
      </div>
    </div>
  );
};

export default VotePage;