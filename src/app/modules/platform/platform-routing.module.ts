import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PlatformListComponent } from './components/platform-list/platform-list.component';
import { PlatformCreateComponent } from './components/platform-create/platform-create.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlatformRoutingModule { }
