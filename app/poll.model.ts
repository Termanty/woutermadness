export class Poll {

  constructor(t: String, d: String, c: String[], id: number) {
    this.title = t;
    this.description = d;
    this.choises = c;
    this.id = id;
  };

  id: number;
  title: String;
  description: String;
  choises: String[];
}
