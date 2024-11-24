import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { GameCardComponent } from './components/game-card/game-card.component';
import { TruncateTextPipe } from './pipes/truncate-text/truncate-text.pipe';
import { PriceWithDiscountPipe } from './pipes/price-with-discount/price-with-discount.pipe';
import { GeneralCardComponent } from './components/general-card/general-card.component';

const COMPONENTS = [GameCardComponent, GeneralCardComponent];
const PIPES = [TruncateTextPipe, PriceWithDiscountPipe];

@NgModule({
  declarations: [...COMPONENTS, ...PIPES,],
  imports: [CommonModule, RouterModule],
  exports: [...COMPONENTS, ...PIPES],
})
export class SharedModule { }
