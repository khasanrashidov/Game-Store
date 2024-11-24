import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublisherRoutingModule } from './publisher-routing.module';
import { PublisherListComponent } from './components/publisher-list/publisher-list.component';
import { PublisherViewComponent } from './components/publisher-view/publisher-view.component';
import { PublisherCreateComponent } from './components/publisher-create/publisher-create.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    PublisherListComponent,
    PublisherViewComponent,
    PublisherCreateComponent
  ],
  imports: [
    CommonModule,
    PublisherRoutingModule,
    SharedModule
  ]
})
export class PublisherModule { }
