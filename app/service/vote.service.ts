import { Injectable } from '@angular/core';

import { Vote } from '../model/vote.model';

const VOTES = [
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
]


@Injectable()
export class VoteService {
  votes: Vote[] = [];

  constructor() { this.votes = VOTES }

  getVotes(): Promise<Vote[]> {
    return Promise.resolve(this.votes);
  }

  getVotesForPoll(poll_id: number) {
    return this.getVotes().then(votes =>
      this.votes.filter(vote => vote.poll_id === poll_id));
  }

  addVote(vote: Vote) {
    this.votes.push(vote);
  }

  getVotesSlowly() { return new Promise<Vote[]>(
    resolve => setTimeout(() => resolve(VOTES), 1000))
  }
}
