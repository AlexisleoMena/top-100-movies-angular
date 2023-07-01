import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { ListMoviesComponent } from './pages/list-movies/list-movies.component';
import { MoviesLayoutComponent } from './layouts/movies-layout/movies-layout.component';
import { MaterialModule } from './material/material.module';
import { SavedMoviesComponent } from './pages/saved-movies/saved-movies.component';
import { HomeMoviesComponent } from './pages/home-movies/home-movies.component';


@NgModule({
  declarations: [
    ListMoviesComponent,
    MoviesLayoutComponent,
    SavedMoviesComponent,
    HomeMoviesComponent,
  ],
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MaterialModule
  ]
})
export class MoviesModule { }
