const candidatesList = [
  {id: 1, firstName: 'Вася', lastName: 'Пупкин', votesAmount: 2 },
  {id: 2, firstName: 'Петя', lastName: 'Сидоров', votesAmount: 0 },
  {id: 3, firstName: 'Иван', lastName: 'Иванов', votesAmount: 1 },
]

export default class CandidatesApi {
  getCandidates() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(candidatesList), 500);
    });
  }
  addVotesForCandidate(candidateId) {
    candidatesList.map((c) => c.id === candidateId ? c.votesAmount++ : c.votesAmount)
  }
}