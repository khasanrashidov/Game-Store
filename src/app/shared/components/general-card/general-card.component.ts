import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-general-card',
  templateUrl: './general-card.component.html',
  styleUrl: './general-card.component.scss',
})
export class GeneralCardComponent {
  @Input({ required: true }) id: string | null = null;
  @Input({ required: true }) title: string | null = null;
  @Input() description: string | null = null;
  @Input({ required: true }) navigationLink: string | null = null;

  constructor(private readonly _router: Router) {}

  // navigateToItem(): void {
  //   this._router.navigate([this.navigationLink]);
  // }
}
