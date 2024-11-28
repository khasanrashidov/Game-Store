import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';

import { GameModel } from '../../core/models/game/game.model';
import { GameService } from '../game/services/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  games: GameModel[] | null = null;
  isLoading = true;

  constructor(private readonly _gameService: GameService) {}

  ngOnInit(): void {
    this._gameService
      .getAllGames()
      .pipe(takeUntil(this.destroy$))
      .subscribe((games) => {
        this.games = games;
        this.isLoading = false;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
