import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GameCardComponent } from './components/game-card/game-card.component';
import { TruncateTextPipe } from './pipes/truncate-text/truncate-text.pipe';

const components = [GameCardComponent];
const pipes = [TruncateTextPipe];

@NgModule({
  declarations: [...components, ...pipes],
  imports: [CommonModule, RouterModule],
  exports: [...components, ...pipes],
})
export class SharedModule {}
