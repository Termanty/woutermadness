import { Component, OnInit } from '@angular/core';

import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';
import { Poll } from '../poll.model';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-poll-creator',
  templateUrl: 'app/poll-creator/poll-creator.component.html'
})
export class PollCreatorComponent implements OnInit {
  form: FormGroup;
  choices: FormArray;

  constructor(
    private pollService: PollService,
    private _fb: FormBuilder) {
    this.form = _fb.group({
      title: 'trump vs hilary',
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
      this.buildGroup()
    ]);
    return this.choices;
  }

  addChoice() { this.choices.push(this.buildGroup()) }

  savePoll() {
    this.pollService.addPoll(
      new Poll(
        this.form.value['title'],
        this.form.value['description'],
        this.form.value['choices'],55)
    );
  }
}
