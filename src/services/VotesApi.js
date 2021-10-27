export default class VotesApi {
  async getVotes() {
    const response = await fetch(`/getVotes`);
    const data = await response.json();
    return data
  }

  async addVote(finalVote, countryCode) {
    if (countryCode === "BY") {
      console.log('code:', countryCode);
      const response = await fetch(`/addVotes`, {
        method: 'POST',
        body: JSON.stringify(finalVote),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      return data;
    } else {
      console.log('Your country is not Belarus')
    }

  }
}
