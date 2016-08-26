import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Poll } from '../model/poll.model';
import { PollService } from '../service/poll.service';

@Component({
  selector: 'app-popular',
  templateUrl: 'app/popular/popular.component.html',
  styleUrls: ['./app/popular/popular.component.css']
})
export class PopularComponent implements OnInit {
  popularPolls: Poll[] = [];

  constructor(
    private pollService: PollService,
    private router: Router) { }

  ngOnInit() {
    this.pollService.getPolls()
        .then(polls =>
          this.popularPolls = polls.sort((a, b) => b.voteCount - a.voteCount).slice(0,4));
  }

  goPoll(id: string) {
    this.router.navigate(['/poll', id]);
  }
}
