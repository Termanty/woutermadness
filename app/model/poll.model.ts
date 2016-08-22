export class Poll {

  constructor(t: String, d: String, c: String[], votes: number = 0) {
    this.title = t;
    this.description = d;
    this.choices = c;
    this.voteCount = votes;
  };

  _id: string;
  title: String;
  description: String;
  choices: String[];
  voteCount: number;
  __v: number;
}
