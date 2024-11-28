import { Subject, takeUntil } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';

import { PlatformModel } from '../../../../core/models/platform/platform.model';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-platform-list',
  templateUrl: './platform-list.component.html',
  styleUrl: './platform-list.component.scss',
})
export class PlatformListComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  platforms: PlatformModel[] | null = null;
  isLoading = true;

  constructor(private readonly _platformService: PlatformService) {}

  ngOnInit(): void {
    this._platformService
      .getAllPlatforms()
      .pipe(takeUntil(this.destroy$))
      .subscribe((platforms) => {
        this.isLoading = false;
        this.platforms = platforms;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
