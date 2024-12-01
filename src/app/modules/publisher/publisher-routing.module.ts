import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PublisherListComponent } from './components/publisher-list/publisher-list.component';
import { PublisherCreateComponent } from './components/publisher-create/publisher-create.component';
import { PublisherViewComponent } from './components/publisher-view/publisher-view.component';

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
  },
  {
    path: 'update/:id',
    component: PublisherCreateComponent,
    pathMatch: 'full',
  },
  {
    path: 'view/:id',
    component: PublisherViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublisherRoutingModule {}
