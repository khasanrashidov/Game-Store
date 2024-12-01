import { filter, map, Subject, switchMap, takeUntil, tap } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { CreatePublisherModel } from '../../../../core/models/publisher/create-publisher.model';
import { PublisherModel } from '../../../../core/models/publisher/publisher.model';
import { UpdatePublisherModel } from '../../../../core/models/publisher/update-publisher.model';
import { PublisherService } from '../../services/publisher.service';

const UPDATE_PUBLISHER_PATH = 'update';

@Component({
  selector: 'app-publisher-create',
  templateUrl: './publisher-create.component.html',
  styleUrls: ['./publisher-create.component.scss'],
})
export class PublisherCreateComponent implements OnInit, OnDestroy {
  private readonly destroy$ = new Subject<void>();

  publisherForm!: FormGroup<{
    [K in keyof PublisherFormModel]: FormControl<PublisherFormModel[K]>;
  }>;

  isSubmitting = false;
  isPublisherUpdate = false;
  publisher: PublisherModel | null = null;
  publisherCompanyName: string | null = null;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _publisherService: PublisherService,
    private readonly _router: Router,
    private readonly _activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this._activatedRoute.url
      .pipe(
        map((url) =>
          url.some((segment) => segment.path === UPDATE_PUBLISHER_PATH)
        ),
        filter((isUpdatePath) => isUpdatePath),
        map(() => this._activatedRoute.snapshot.params['id']),
        tap(() => (this.isPublisherUpdate = true)),
        switchMap((publisherId) =>
          this._publisherService.getPublisherByCompanyName(publisherId)
        ),
        takeUntil(this.destroy$)
      )
      .subscribe((publisher) => {
        this.publisher = publisher;
        this.publisherForm.patchValue({
          companyName: publisher.companyName,
          homePage: publisher.homePage ?? null,
          description: publisher.description ?? null,
        });
      });

    this.publisherForm = this._formBuilder.group({
      companyName: new FormControl('', {
        nonNullable: true,
        validators: [Validators.required, Validators.maxLength(128)],
      }),
      homePage: new FormControl<string | null>(null, {
        validators: [
          Validators.pattern(/^https?:\/\/([\w\d-]+\.)+[\w\d]{2,}(\/.*)?$/),
          Validators.maxLength(512),
        ],
      }),
      description: new FormControl<string | null>(null, {
        validators: [Validators.maxLength(2_048)],
      }),
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  onSubmit(): void {
    if (this.isPublisherUpdate) {
      this._updatePublisher();
    } else {
      this._createPublisher();
    }
  }

  private _createPublisher(): void {
    if (this.publisherForm.valid) {
      this.isSubmitting = true;

      const createPublisherModel: CreatePublisherModel = {
        companyName: this.publisherForm.value.companyName ?? '',
        homePage: this.publisherForm.value.homePage ?? undefined,
        description: this.publisherForm.value.description ?? undefined,
      };

      this._publisherService
        .createPublisher(createPublisherModel)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => {
            this.publisherForm.reset();
            this._router.navigate(['/publisher/list']);
          },
          error: (error) => {
            console.error('Error creating publisher:', error);
            this.isSubmitting = false;
          },
          complete: () => {
            this.isSubmitting = false;
          },
        });
    }
  }

  private _updatePublisher(): void {
    if (this.publisherForm.valid && this.publisher) {
      this.isSubmitting = true;
      this.publisherCompanyName = this.publisherForm.value.companyName ?? '';

      const updatePublisherModel: UpdatePublisherModel = {
        id: this.publisher.id,
        companyName: this.publisherForm.value.companyName ?? '',
        homePage: this.publisherForm.value.homePage ?? undefined,
        description: this.publisherForm.value.description ?? undefined,
      };

      this._publisherService
        .updatePublisher(updatePublisherModel)
        .pipe(takeUntil(this.destroy$))
        .subscribe({
          next: () => {
            this.publisherForm.reset();
            this._router.navigate([
              '/publisher/view/',
              this.publisherCompanyName,
            ]);
          },
          error: (error) => {
            console.error('Error updating publisher:', error);
            this.isSubmitting = false;
          },
          complete: () => {
            this.isSubmitting = false;
          },
        });
    }
  }
}

// #region

interface PublisherFormModel {
  companyName: string;
  homePage: string | null;
  description: string | null;
}

// #endregion
