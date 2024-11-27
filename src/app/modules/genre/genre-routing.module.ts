import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenreListComponent } from './components/genre-list/genre-list.component';
import { GenreCreateComponent } from './components/genre-create/genre-create.component';
import { GenreViewComponent } from './components/genre-view/genre-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full' as const,
  },
  {
    path: 'list',
    component: GenreListComponent,
  },
  {
    path: 'create',
    component: GenreCreateComponent
  },
  {
    path: 'view/:id',
    component: GenreViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenreRoutingModule { }
