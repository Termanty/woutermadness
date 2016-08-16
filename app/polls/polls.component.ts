import { Component, OnInit } from '@angular/core';

import { PollService } from '../poll.service';

@Component({
  selector: 'app-polls',
  templateUrl: 'app/polls/polls.component.html'
})
export class PollsComponent  {
  title = 'All Components';
  polls = [];

  constructor(private pollService: PollService) { };

  ngOnInit() {
    this.pollService.getPollsSlowly().then(polls => this.polls = polls);
  };


}
