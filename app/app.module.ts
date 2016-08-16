import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { appRoutes } from './routing';

import { PollsComponent } from './polls/polls.component';
import { PollCreatorComponent } from './poll-creator/poll-creator.component';
import { PollDoerComponent } from './poll-doer/poll-doer.component';
import { PopularComponent } from './popular/popular.component';

import { PollService } from './poll.service';

@NgModule({
    imports: [BrowserModule,
    		  HttpModule,
    		  FormsModule,
    		  ReactiveFormsModule,
          appRoutes],
    declarations: [AppComponent,
          PollsComponent,
          PollCreatorComponent,
          PollDoerComponent,
          PopularComponent],
    providers: [PollService],
    bootstrap: [AppComponent]
})

export class AppModule {}
