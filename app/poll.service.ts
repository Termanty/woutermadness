import { Injectable } from '@angular/core';

import { Poll } from './poll.model';

const POLLS = [
  new Poll('Clinton vs. Trump',
    'Title says all. Which one is your favourite?',
    ['Clinton', 'Trump', 'Not interested']),
  new Poll('CocaCola vs Pepsi',
    'Taste maters. Which one is your favourite?',
    ['CocaCola', 'Pepsi', 'Not for me']),
  new Poll('Pasta vs Potatoes',
    'Taste maters. Which one is your favourite?',
    ['Pasta', 'Potatoes', 'Not for me']),
  new Poll('Milk vs Vine',
    'Taste maters. Which one is your favourite?',
    ['Milk', 'Vine', 'I prefer water'])
]

@Injectable()
export class PollService {
  polls = POLLS;

  getPolls() { return Promise.resolve(POLLS); };

  getPollsSlowly() { return new Promise<Poll[]>(
    resolve => setTimeout( () => resolve(POLLS), 1000 )
  )};

}
