import { Subject, takeUntil } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';

import { PublisherModel } from '../../../../core/models/publisher/publisher.model';
import { PublisherService } from '../../services/publisher.service';

@Component({
  selector: 'app-publisher-list',
  templateUrl: './publisher-list.component.html',
  styleUrl: './publisher-list.component.scss',
})
export class PublisherListComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  publishers: PublisherModel[] | null = null;
  isLoading = true;

  constructor(private readonly _publisherService: PublisherService) {}

  ngOnInit(): void {
    this._publisherService
      .getAllPublishers()
      .pipe(takeUntil(this.destroy$))
      .subscribe((publishers) => {
        this.isLoading = false;
        this.publishers = publishers;
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
