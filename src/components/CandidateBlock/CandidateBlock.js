import React, {useEffect, useState} from 'react';
import styles from './CandidateBlock.module.scss'
import VotesApi from "../../services/VotesApi";
import {Skeleton} from "@mui/material";

const CandidateBlock = ({firstName, lastName, votesAmount}) => {
  const [votes, setVotes] = useState([])

  const fetchVotesAmount = async () => {
    const api = new VotesApi();
    const votesAmount = await api.getVotes();
    setVotes(votesAmount);
  }

  useEffect(() => {
    fetchVotesAmount();
  },[])


  return (
    <div className={styles.candidateWrapper}>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div className={styles.percentage}>
        {votes.length > 0
          ?
          Math.round(votesAmount/votes.length*100) + '%'
          :
          <Skeleton  variant="text" width={40} height={25}/>
        }
      </div>
    </div>
  );
};

export default CandidateBlock;