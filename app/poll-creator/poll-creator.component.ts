import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Poll } from '../model/poll.model';
import { PollService } from '../service/poll.service';

@Component({
  selector: 'app-poll-creator',
  templateUrl: 'app/poll-creator/poll-creator.component.html',
  styleUrls: ['./app/poll-creator/poll-creator.component.css']
})
export class PollCreatorComponent implements OnInit {
  form: FormGroup;
  choices: FormArray;

  constructor(
    private pollService: PollService,
    private _fb: FormBuilder,
    private router: Router
    ) {
    this.form = _fb.group({
      title: '',
      description: '',
      choices: this.buildArray()
    });
  }

  ngOnInit() { }

  buildGroup(): FormGroup {
    return this._fb.group({
      choice: ''
    });
  }

  buildArray(): FormArray {
    this.choices = this._fb.array([
      this.buildGroup(),
      this.buildGroup()
    ]);
    return this.choices;
  }

  addChoice() { this.choices.push(this.buildGroup()) }

  savePoll() {
    this.pollService.addPoll(JSON.stringify({
          title: this.form.value.title,
          description: this.form.value.description,
          choices: this.form.value.choices.map(obj => obj['choice']),
          voteCount: 0
        }))
        .then(res => this.router.navigate(['/polls']));
  }
}
