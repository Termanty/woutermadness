import { Component, OnInit } from '@angular/core';

import { Poll } from '../poll.model';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-popular',
  templateUrl: 'app/popular/popular.component.html'
})
export class PopularComponent implements OnInit {
  popularPolls: Poll[] = [];

  constructor(private pollService: PollService) { }

  ngOnInit() {
    this.pollService.getPolls().then(polls => this.popularPolls = polls.slice(1,3));
  }
}
