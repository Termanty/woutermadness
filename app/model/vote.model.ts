export class Vote {

  constructor(
    id: number,
    poll_id: number,
    voter: string,
    vote_id: number) {
      this.id = id;
      this.poll_id = poll_id;
      this.voter = voter;
      this.vote_id = vote_id;
  }

  id: number;
  poll_id: number;
  voter_id: number;
  voter: string;
  vote_id: number;
  comment: string;
}
