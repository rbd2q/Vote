import React, { useState } from 'react';
import WelcomePage from "../WelcomePage/WelcomePage";
import CandidateBlock from "../CandidateBlock/CandidateBlock";
import styles from './MainPage.module.scss'
import CandidatesApi from "../../services/CandidatesApi";
import {useHistory} from "react-router-dom";
import {Button} from "@mui/material";

const MainPage = () => {
  const [candidatesList, setCandidatesList] = useState([]);
  const history = useHistory();

  const fetchCandidates = async () => {
    const api = new CandidatesApi();
    const data = await api.getCandidates();

    setCandidatesList(data);
  }

  const hideCandidates = () => {
    setCandidatesList([]);
  }

  const handleVotePage = () => {
    history.push('/vote')
  }

  return (
    <div>
      <Button
        className={styles.btn}
        variant="contained"
        onClick={candidatesList.length > 0 ? hideCandidates : fetchCandidates}>
        {candidatesList.length > 0 ? 'Hide candidates' :'Show candidates' }
      </Button>
      <Button className={styles.btn} variant="contained" color="success" onClick={handleVotePage}>Vote</Button>
      <div className={styles.mainWrapper}>
        {candidatesList.length === 0 ? <WelcomePage/> : candidatesList.map((c) =>
          <CandidateBlock key={c.id} firstName={c.firstName} lastName={c.lastName} votesAmount={c.votesAmount}/>
          )}
      </div>
    </div>
  );
};

export default MainPage;