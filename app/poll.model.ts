export class Poll {

  constructor(t: String, d: String, c: String[]) {
    this.title = t;
    this.description = d;
    this.choises = c;
  };

  title: String;
  description: String;
  choises: String[];
}
