import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlatformRoutingModule } from './platform-routing.module';
import { PlatformListComponent } from './components/platform-list/platform-list.component';
import { PlatformViewComponent } from './components/platform-view/platform-view.component';
import { PlatformCreateComponent } from './components/platform-create/platform-create.component';
import { SharedModule } from "../../shared/shared.module";


@NgModule({
  declarations: [
    PlatformListComponent,
    PlatformViewComponent,
    PlatformCreateComponent
  ],
  imports: [
    CommonModule,
    PlatformRoutingModule,
    SharedModule
]
})
export class PlatformModule { }
