import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameViewComponent } from './components/game-view/game-view.component';
import { GameRoutingModule } from './game-routing.module';
import { GameCreateComponent } from './components/game-create/game-create.component';

@NgModule({
  declarations: [GameViewComponent, GameCreateComponent],
  imports: [CommonModule, GameRoutingModule],
})
export class GameModule { }
