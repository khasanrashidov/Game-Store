import saveAs from 'file-saver';
import {
  catchError,
  forkJoin,
  of,
  Subject,
  switchMap,
  take,
  takeUntil,
} from 'rxjs';

import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GameModel } from '../../../../core/models/game/game.model';
import { GenreModel } from '../../../../core/models/genre/genre.model';
import { PlatformModel } from '../../../../core/models/platform/platform.model';
import { PublisherModel } from '../../../../core/models/publisher/publisher.model';
import { GenreService } from '../../../genre/services/genre.service';
import { PlatformService } from '../../../platform/services/platform.service';
import { PublisherService } from '../../../publisher/services/publisher.service';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-game-view',
  templateUrl: './game-view.component.html',
  styleUrls: ['./game-view.component.scss'],
})
export class GameViewComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  game: GameModel | null = null;
  genres: GenreModel[] | null = null;
  platforms: PlatformModel[] | null = null;
  publisher: PublisherModel | null = null;

  isLoading = true;
  isDownloading = false;
  isDeleting = false;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _gameService: GameService,
    private readonly _genreService: GenreService,
    private readonly _platformService: PlatformService,
    private readonly _publisherService: PublisherService
  ) {}

  ngOnInit(): void {
    this._route.paramMap
      .pipe(
        switchMap((params) => {
          const gameIdParam = params.get('id');

          if (gameIdParam) {
            return this._gameService.getGameById(gameIdParam).pipe(
              switchMap((game) => {
                if (game) {
                  return forkJoin({
                    game: of(game),
                    genres: this._genreService.getGenresByGameKey(game.key),
                    publisher: this._publisherService.getPublisherByGameKey(
                      game.key
                    ),
                    platforms: this._platformService.getPlatformsByGameKey(
                      game.key
                    ),
                  });
                } else {
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
      .subscribe((result) => {
        if (result) {
          this.isLoading = false;
          this.game = result.game;
          this.genres = result.genres;
          this.publisher = result.publisher;
          this.platforms = result.platforms;
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onDownloadGameFile(): void {
    this.isDownloading = true;

    if (this.game?.key) {
      this._gameService.downloadGame(this.game.key).subscribe((blob) => {
        this.isDownloading = false;

        saveAs(blob);
      });
    }
  }

  onRemoveGame(): void {
    this.isDeleting = true;

    if (this.game?.key) {
      this._gameService
        .deleteGame(this.game.key)
        .pipe(take(1))
        .subscribe(() => {
          this.isDeleting = false;
          this._router.navigate(['/']);
        });
    }
  }
}
