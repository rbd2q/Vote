const votesList = [
  {passportNumber: 'MP123456', candidateId: 1},
  {passportNumber: 'MP876543', candidateId: 1},
  {passportNumber: 'MP876512', candidateId: 3},
]

export default class VotesApi {
  getVotes() {
    return new Promise((resolve) => {
      setTimeout(() => resolve(votesList), 500);
    });
  }

  addVote(finalVote) {
    votesList.push(finalVote)
  }
}