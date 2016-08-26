export class Poll {

  constructor(t: string, d: string, c: string[], votes: number = 0) {
    this.title = t;
    this.description = d;
    this.choices = c;
    this.voteCount = votes;
  };

  _id: string;
  title: string;
  description: string;
  choices: string[];
  voteCount: number;
  __v: number;
}
