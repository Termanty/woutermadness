import { Routes, RouterModule } from '@angular/router';

import { PollsComponent } from './polls/polls.component';
import { PollCreatorComponent } from './poll-creator/poll-creator.component';
import { PopularComponent } from './popular/popular.component';

const ROUTES: Routes = [
  { path: '', redirectTo: '/popular', pathMatch: 'full' },
  { path: 'polls', component: PollsComponent },
  { path: 'popular', component: PopularComponent },
  { path: 'create', component: PollCreatorComponent }
]

export const appRoutes = RouterModule.forRoot(ROUTES);
