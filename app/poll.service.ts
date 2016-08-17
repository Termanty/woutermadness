import { Injectable } from '@angular/core';

import { Poll } from './poll.model';

const POLLS = [
  new Poll('Clinton vs. Trump',
    'Title says all. Which one is your favourite?',
    ['Clinton', 'Trump', 'Not interested'], 1),
  new Poll('CocaCola vs Pepsi',
    'Taste maters. Which one is your favourite?',
    ['CocaCola', 'Pepsi', 'Not for me'], 2),
  new Poll('Pasta vs Potatoes',
    'Taste maters. Which one is your favourite?',
    ['Pasta', 'Potatoes', 'Not for me'], 3),
  new Poll('Milk vs Vine',
    'Taste maters. Which one is your favourite?',
    ['Milk', 'Vine', 'I prefer water'], 4)
]

@Injectable()
export class PollService {
  polls: Poll[] = [];

  constructor() { this.polls = POLLS }

  getPolls() { return Promise.resolve(this.polls); };

  getPollsSlowly() { return new Promise<Poll[]>(
    resolve => setTimeout( () => resolve(this.polls), 1000 )
  )};

  addPoll(p: Poll) {
    this.polls.push(p);
  }

}
