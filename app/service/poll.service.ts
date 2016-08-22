import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

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

  addPoll(poll: any): Promise<Poll> {
    let headers = new Headers({ 'content': 'application/json' });
    console.log('poll stringify: ')
    console.log(poll);
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

/*const POLLS = [
  new Poll('Clinton vs. Trump',
    'Title says all. Which one is your favourite?',
    ['Clinton', 'Trump', 'Not interested'], 1, 8),
  new Poll('CocaCola vs Pepsi',
    'Taste maters. Which one is your favourite?',
    ['CocaCola', 'Pepsi', 'Not for me'], 2, 3),
  new Poll('Pasta vs Potatoes',
    'Taste maters. Which one is your favourite?',
    ['Pasta', 'Potatoes', 'Not for me'], 3, 3),
  new Poll('Milk vs Vine',
    'Taste maters. Which one is your favourite?',
    ['Milk', 'Vine', 'I prefer water'], 4)
]*/
