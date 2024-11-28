import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    data: { preload: true },
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'game',
    data: { preload: true },
    loadChildren: () =>
      import('./modules/game/game.module').then((m) => m.GameModule),
  },
  {
    path: 'publisher',
    data: { preload: true },
    loadChildren: () =>
      import('./modules/publisher/publisher.module').then(
        (m) => m.PublisherModule
      ),
  },
  {
    path: 'genre',
    data: { preload: true },
    loadChildren: () =>
      import('./modules/genre/genre.module').then((m) => m.GenreModule),
  },
  {
    path: 'platform',
    data: { preload: true },
    loadChildren: () =>
      import('./modules/platform/platform.module').then(
        (m) => m.PlatformModule
      ),
  },
  {
    path: 'error',
    loadChildren: () =>
      import('./modules/error/error.module').then((m) => m.ErrorModule),
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
