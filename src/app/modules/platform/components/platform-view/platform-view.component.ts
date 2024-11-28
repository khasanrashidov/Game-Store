import { catchError, of, Subject, switchMap, take, takeUntil } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GameModel } from '../../../../core/models/game/game.model';
import { PlatformModel } from '../../../../core/models/platform/platform.model';
import { GameService } from '../../../game/services/game.service';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-platform-view',
  templateUrl: './platform-view.component.html',
  styleUrl: './platform-view.component.scss',
})
export class PlatformViewComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  platform: PlatformModel | null = null;
  games: GameModel[] | null = null;
  isPlatformLoading = true;
  isPlatformDeleting = false;
  areGamesLoading = true;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _platformService: PlatformService,
    private readonly _gameService: GameService
  ) {}

  ngOnInit(): void {
    this._route.paramMap
      .pipe(
        switchMap((params) => {
          const platformIdParam = params.get('id');

          if (platformIdParam) {
            return this._platformService.getPlatformById(platformIdParam).pipe(
              switchMap((platform) => {
                if (platform) {
                  this.isPlatformLoading = false;
                  this.platform = platform;
                  return this._gameService.getGamesByPlatformId(
                    platformIdParam
                  );
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

  onRemovePlatform(): void {
    this.isPlatformDeleting = true;

    if (this.platform?.id) {
      this._platformService
        .deletePlatform(this.platform.id)
        .pipe(take(1))
        .subscribe(() => {
          this._router.navigate(['/platform/list']);
        });
    }
  }
}
