import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { GameViewComponent } from "./components/game-view/game-view.component";
import { GameCreateComponent } from "./components/game-create/game-create.component";

const routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full' as const,
  },
  {
    path: 'view/:id',
    component: GameViewComponent,
  },
  {
    path: 'create',
    component: GameCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule { }
