import { Component, OnInit } from '@angular/core';

import { PollService } from '../service/poll.service';
import { Poll } from '../model/poll.model';

@Component({
  selector: 'app-polls',
  templateUrl: 'app/polls/polls.component.html',
  styles: [`
    tab1 { padding-left: 12em; }
    tab2 { padding-left: 2em; }
  `]
})
export class PollsComponent  {
  title = 'All Components';
  polls: Poll[] = [];

  constructor(private pollService: PollService) { }

  ngOnInit() {
    this.pollService.getPollsSlowly().then(polls => this.polls = polls);
  }

}
