import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Poll } from '../model/poll.model';
import { PollService } from '../service/poll.service';

@Component({
  selector: 'app-poll-doer',
  templateUrl: 'app/poll-doer/poll-doer.component.html'
})
export class PollDoerComponent implements OnInit {
  poll: Poll = null;

  constructor(
    private pollService: PollService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.pollService.getPoll(id).then(poll => this.poll = poll);
    });
  }

  goBack() { window.history.back() }

}
