export class Poll {

  constructor(t: String, d: String, c: String[], id: number, votes: number = 0) {
    this.id = id;
    this.title = t;
    this.description = d;
    this.choices = c;
    this.voteCount = votes;
  };

  id: number;
  title: String;
  description: String;
  choices: String[];
  voteCount: number;
}
