import { catchError, of, Subject, switchMap, take, takeUntil } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GameModel } from '../../../../core/models/game/game.model';
import { GenreModel } from '../../../../core/models/genre/genre.model';
import { GameService } from '../../../game/services/game.service';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-genre-view',
  templateUrl: './genre-view.component.html',
  styleUrl: './genre-view.component.scss',
})
export class GenreViewComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  genre: GenreModel | null = null;
  games: GameModel[] | null = null;
  isGenreLoading = true;
  isGenreDeleting = false;
  areGamesLoading = true;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _genreService: GenreService,
    private readonly _gameService: GameService
  ) {}

  ngOnInit(): void {
    this._route.paramMap
      .pipe(
        switchMap((params) => {
          const genreIdParam = params.get('id');

          if (genreIdParam) {
            return this._genreService.getGenreById(genreIdParam).pipe(
              switchMap((genre) => {
                if (genre) {
                  this.isGenreLoading = false;
                  this.genre = genre;
                  return this._gameService.getGamesByGenreId(genreIdParam);
                } else {
                  this._router.navigate(['/error/not-found']);
                  return of(null);
                }
              }),
              catchError((error) => {
                if (error.status === 404) {
                  this._router.navigate(['/error/not-found']);
                }
                return of(null);
              })
            );
          } else {
            return of(null);
          }
        }),
        takeUntil(this.destroy$)
      )
      .subscribe((games) => {
        if (games) {
          this.areGamesLoading = false;
          this.games = games;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onRemoveGenre(): void {
    this.isGenreDeleting = true;

    if (this.genre?.id) {
      this._genreService
        .deleteGenre(this.genre.id)
        .pipe(take(1))
        .subscribe(() => {
          this._router.navigate(['/genre/list']);
        });
    }
  }
}
