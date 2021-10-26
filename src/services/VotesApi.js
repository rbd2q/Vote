export default class VotesApi {
  async getVotes() {
    const response = await fetch(`/getVotes`);
    const data = await response.json();
    return data
  }

  async addVote(finalVote) {
    const response = await fetch(`/addVotes`, {
      method: 'POST',
      body: JSON.stringify(finalVote),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await response.json();
    return data
  }
}