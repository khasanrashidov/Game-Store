import { Subject, takeUntil } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';

import { GenreModel } from '../../../../core/models/genre/genre.model';
import { GenreService } from '../../services/genre.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrl: './genre-list.component.scss',
})
export class GenreListComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  genres: GenreModel[] | null = null;
  isLoading = true;

  constructor(private readonly _genreService: GenreService) {}

  ngOnInit(): void {
    this._genreService
      .getAllGenres()
      .pipe(takeUntil(this.destroy$))
      .subscribe((genres) => {
        this.isLoading = false;
        this.genres = genres;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
