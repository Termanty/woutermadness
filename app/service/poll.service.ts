import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Poll } from '../model/poll.model';

@Injectable()
export class PollService {
  private pollUrl = 'api/poll';
  private pollsUrl = 'api/polls';

  private options = new RequestOptions({
    headers: new Headers({
      'Content-Type': 'application/json',
      'charset': 'UTF-8'
    })
  });

  polls: Poll[] = [];

  constructor(private http: Http) { }

  getPoll(id: string) : Promise<Poll> {
    return this.getPolls().then(polls => polls.find(poll => poll._id === id));
  }

  getPolls(): Promise<Poll[]> {
    return this.http.get(this.pollsUrl)
               .toPromise()
               .then(response => response.json() as Poll[])
               .catch(this.handleError);
  };

  addPoll(poll: any): Promise<any> {
    return this.http.post(this.pollsUrl, poll, this.options)
               .toPromise()
               .then(res => res.json())
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
