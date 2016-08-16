import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';

@NgModule({
    imports: [BrowserModule,
    		  HttpModule,
    		  FormsModule,
    		  ReactiveFormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})

export class AppModule {}