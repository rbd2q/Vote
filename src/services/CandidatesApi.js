export default class CandidatesApi {
  async getCandidates() {
    const response = await fetch(`/getCandidates`);
    const data = await response.json();
    return data
  }
}