import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GameModel } from '../../../core/models/game/game.model';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrl: './game-card.component.scss',
})
export class GameCardComponent {
  @Input() game: GameModel | null = null;

  constructor(private readonly _router: Router) { }

  addToCart(gameId: string | undefined): void {
    console.log('Game added to cart:', gameId);
  }

  navigateToGame(gameId: string | undefined): void {
    if (gameId) {
      this._router.navigate(['/game/view', gameId]);
    }
  }
}
