import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublisherRoutingModule } from './publisher-routing.module';
import { PublisherListComponent } from './components/publisher-list/publisher-list.component';
import { PublisherViewComponent } from './components/publisher-view/publisher-view.component';
import { PublisherCreateComponent } from './components/publisher-create/publisher-create.component';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PublisherListComponent,
    PublisherViewComponent,
    PublisherCreateComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PublisherRoutingModule,
    SharedModule,
  ],
})
export class PublisherModule {}
