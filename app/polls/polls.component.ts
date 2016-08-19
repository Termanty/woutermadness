import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PollService } from '../service/poll.service';
import { Poll } from '../model/poll.model';

@Component({
  selector: 'app-polls',
  templateUrl: 'app/polls/polls.component.html',
  styleUrls: ['./app/polls/polls.component.css']
})
export class PollsComponent  {
  title = 'All Components';
  polls: Poll[] = [];

  constructor(
    private pollService: PollService,
    private router: Router) {
    }

  ngOnInit() {
    this.pollService.getPollsSlowly().then(polls => this.polls = polls);
  }

  goPoll(id: number) {
    this.router.navigate(['/poll', id]);
  }

}
