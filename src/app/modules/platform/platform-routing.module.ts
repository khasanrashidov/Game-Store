import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlatformListComponent } from './components/platform-list/platform-list.component';
import { PlatformCreateComponent } from './components/platform-create/platform-create.component';
import { PlatformViewComponent } from './components/platform-view/platform-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full' as const,
  },
  {
    path: 'list',
    component: PlatformListComponent,
  },
  {
    path: 'create',
    component: PlatformCreateComponent,
  },
  {
    path: 'view/:id',
    component: PlatformViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
