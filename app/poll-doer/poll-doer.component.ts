import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { Poll } from '../model/poll.model';
import { PollService } from '../service/poll.service';
import { VoteService } from '../service/vote.service';

@Component({
  selector: 'app-poll-doer',
  templateUrl: 'app/poll-doer/poll-doer.component.html',
  styles: [
    `.vote { background-color: #87c9fc; padding: 1rem; }`
  ]
})
export class PollDoerComponent implements OnInit {
  poll: Poll = null;

  form =  new FormGroup({
    nick: new FormControl,
    vote: new FormControl
  });



  constructor(
    private voteService: VoteService,
    private pollService: PollService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      let id = params['id'];
      this.pollService.getPoll(id).then(poll => this.poll = poll);
    });
  }

  saveVote() {
    this.voteService.addVote(JSON.stringify({
          poll_id: this.poll._id,
          vote: this.form.value.vote,
          nick: this.form.value.nick }))
        .then(res => this.router.navigate(['/polls']));
  }

  goBack() { window.history.back() }

}
