import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Vote } from '../model/vote.model';

@Injectable()
export class VoteService {
  votesUrl = 'api/votes';
  votes: Vote[] = [];

  private options = new RequestOptions({
    headers: new Headers({
      'Content-Type': 'application/json',
      'charset': 'UTF-8'
    })
  });

  constructor(private http: Http) { }

  getVotesForPoll(poll_id: string) {
    return this.getVotes().then(votes =>
      this.votes.filter(vote => vote.poll_id === poll_id));
  }

  getVotes(): Promise<Vote[]> {
    return this.http.get(this.votesUrl)
               .toPromise()
               .then(response => response.json() as Vote[])
               .catch(this.handleError);
  }

  addVote(vote: any): Promise<any> {
    return this.http.post(this.votesUrl, vote, this.options)
               .toPromise()
               .then(response => response.json())
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}

/*const VOTES = [
  new Vote(1, 1, "HotBot", 1),
  new Vote(2, 1, "Nassu", 1),
  new Vote(3, 1, "Trs", 1),
  new Vote(4, 1, "Hilu", 1),
  new Vote(5, 1, "Fix", 1),
  new Vote(6, 1, "Cooler", 2),
  new Vote(7, 1, "Pipe", 2),
  new Vote(8, 1, "Dream", 2),
  new Vote(13, 2, "Trs", 1),
  new Vote(14, 2, "Hilu", 1),
  new Vote(15, 2, "Fix", 2),
  new Vote(16, 3, "Cooler", 2),
  new Vote(17, 3, "Pipe", 1),
  new Vote(18, 3, "Dream", 2),
]*/

