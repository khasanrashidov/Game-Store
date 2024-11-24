import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublisherListComponent } from './components/publisher-list/publisher-list.component';
import { PublisherCreateComponent } from './components/publisher-create/publisher-create.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full' as const,
  },
  {
    path: 'list',
    component: PublisherListComponent,
  },
  {
    path: 'create',
    component: PublisherCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublisherRoutingModule { }
