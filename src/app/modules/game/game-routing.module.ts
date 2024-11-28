import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { GameViewComponent } from './components/game-view/game-view.component';
import { GameCreateComponent } from './components/game-create/game-create.component';
import { HomeComponent } from '../home/home.component';

const routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full' as const,
  },
  {
    path: 'list',
    component: HomeComponent,
  },
  {
    path: 'view/:id',
    component: GameViewComponent,
  },
  {
    path: 'create',
    component: GameCreateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule {}
