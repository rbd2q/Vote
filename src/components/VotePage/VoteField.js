import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import styles from './VotePage.module.scss'
import {useState} from "react";
import VotesApi from "../../services/VotesApi";
import CandidatesApi from "../../services/CandidatesApi";
import {useHistory} from "react-router-dom";
import validateForm from "./VoteValidation/VoteValidation";

export default function VoteField() {
  const history = useHistory();
  const [passportNumber, setPassportNumber] = useState('');
  const [candidateId, setCandidateId] = useState('');
  const [errors, setErrors] = useState({});

  const handlePassportNumberChange = (event) => {
    setPassportNumber(event.target.value);
  };

  const handleCandidateChange = (event) => {
    setCandidateId(event.target.value);
  };

  const handleSubmitForm = async () => {
    const newErrors = validateForm({ passportNumber });
    setErrors(newErrors);

    if (Object.entries(newErrors).length > 0) {
      return;
    }

    const api = new VotesApi();
    await api.addVote({passportNumber, candidateId});

    history.push('/vote/completed')
  }

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': {m: 1, width: '25ch'},
      }}
      noValidate
      autoComplete="off"
    >
      <div className={styles.formWrapper}>
        <TextField
          id="outlined-textarea"
          label="Passport Number"
          placeholder="MPxxxxxx"
          value={passportNumber}
          className={styles.passportInput}
          onChange={handlePassportNumberChange}
          error={errors.name?.length > 0}
          helperText={errors.name}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Candidate</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={candidateId}
            label="Candidate"
            onChange={handleCandidateChange}
          >
            <MenuItem value={1}>Вася Пупкин</MenuItem>
            <MenuItem value={2}>Петя Сидоров</MenuItem>
            <MenuItem value={3}>Иван Иванов</MenuItem>
          </Select>
        </FormControl>
        <Button
          variant="contained"
          className={styles.sendBtn}
          onClick={handleSubmitForm}
          disabled={!passportNumber || !candidateId}
        >
          Send
        </Button>
      </div>
    </Box>
  );
}