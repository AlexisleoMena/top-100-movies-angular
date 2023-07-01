import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesLayoutComponent } from './layouts/movies-layout/movies-layout.component';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { SavedMoviesComponent } from './pages/saved-movies/saved-movies.component';
import { HomeMoviesComponent } from './pages/home-movies/home-movies.component';

const routes: Routes = [
  {
    path: '',
    component: MoviesLayoutComponent,
    children: [
      {
        path: '',
        component: HomeMoviesComponent
      },
      {
        path: 'list',
        component: ListMoviesComponent
      },
      {
        path: 'saved',
        component: SavedMoviesComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
