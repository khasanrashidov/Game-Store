import { catchError, of, Subject, switchMap, take, takeUntil } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { GameModel } from '../../../../core/models/game/game.model';
import { PublisherModel } from '../../../../core/models/publisher/publisher.model';
import { GameService } from '../../../game/services/game.service';
import { PublisherService } from '../../services/publisher.service';

@Component({
  selector: 'app-publisher-view',
  templateUrl: './publisher-view.component.html',
  styleUrl: './publisher-view.component.scss',
})
export class PublisherViewComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  publisher: PublisherModel | null = null;
  games: GameModel[] = [];
  isPublisherLoading = true;
  isPublisherDeleting = false;
  areGamesLoading = true;

  constructor(
    private readonly _route: ActivatedRoute,
    private readonly _router: Router,
    private readonly _publisherService: PublisherService,
    private readonly _gameService: GameService
  ) {}

  ngOnInit(): void {
    this._route.paramMap
      .pipe(
        switchMap((params) => {
          const publisherCompanyNameParam = params.get('id');

          if (publisherCompanyNameParam) {
            return this._publisherService
              .getPublisherByCompanyName(publisherCompanyNameParam)
              .pipe(
                switchMap((publisher) => {
                  if (publisher) {
                    this.isPublisherLoading = false;
                    this.publisher = publisher;
                    return this._gameService.getGamesByPublisherCompanyName(
                      publisherCompanyNameParam
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

  onRemovePublisher(): void {
    this.isPublisherDeleting = true;

    if (this.publisher?.companyName) {
      this._publisherService
        .deletePublisher(this.publisher.id)
        .pipe(take(1))
        .subscribe(() => {
          this._router.navigate(['/publisher/list']);
        });
    }
  }
}
