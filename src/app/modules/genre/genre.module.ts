import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenreRoutingModule } from './genre-routing.module';
import { GenreListComponent } from './components/genre-list/genre-list.component';
import { GenreViewComponent } from './components/genre-view/genre-view.component';
import { GenreCreateComponent } from './components/genre-create/genre-create.component';


@NgModule({
  declarations: [
    GenreListComponent,
    GenreViewComponent,
    GenreCreateComponent
  ],
  imports: [
    CommonModule,
    GenreRoutingModule
  ]
})
export class GenreModule { }
