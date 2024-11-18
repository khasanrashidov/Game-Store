import { Component, Input } from '@angular/core';
import { GameModel } from '../../../core/models/game/game.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  @Input() game: GameModel | null = null;
}
