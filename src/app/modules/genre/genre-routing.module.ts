import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GenreListComponent } from './components/genre-list/genre-list.component';
import { GenreCreateComponent } from './components/genre-create/genre-create.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenreRoutingModule { }
