import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { GameViewComponent } from "./components/game-view/game-view.component";

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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GameRoutingModule { }
