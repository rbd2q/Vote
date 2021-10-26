const votesList = [
  {passportNumber: 'MP123456', candidateId: 1},
  {passportNumber: 'MP876543', candidateId: 1},
  {passportNumber: 'MP876512', candidateId: 3},
];

const candidatesList = [
  {id: 1, firstName: 'Вася', lastName: 'Пупкин', votesAmount: 2 },
  {id: 2, firstName: 'Петя', lastName: 'Сидоров', votesAmount: 0 },
  {id: 3, firstName: 'Иван', lastName: 'Иванов', votesAmount: 1 },
];

const PORT = 8000;
const express = require('express');
const app = express();
app.use(express.urlencoded());
app.use(express.json());


app.post("/addVotes", function (req, res) {
  const NewVote = req.body;
  votesList.push(NewVote)
  console.log(votesList)
  let id = req.body.candidateId;
  candidatesList.forEach((c) => c.id === id ? c.votesAmount++ : c.votesAmount);
  res.send(votesList)
});

app.get('/getVotes', (req, res) => {
  res.send(votesList)
})

app.get('/getCandidates', (req, res) => {
  res.send(candidatesList)
})

const server = app.listen(PORT,"localhost",() => {
  console.log(`Listening server at port ${PORT}`);
})
