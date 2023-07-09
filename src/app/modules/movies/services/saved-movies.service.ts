import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';

@Injectable({
  providedIn: 'root'
})
export class SavedMoviesService {
  savedMovies: Movie[] = [];

  constructor() {
    const savedMoviesString = localStorage.getItem('peliculas');
    if (savedMoviesString) {
      this.savedMovies = JSON.parse(savedMoviesString);
    }
  }
  saveMovie(movie: Movie) {
    const index = this.savedMovies.findIndex((savedMovie) => savedMovie.id === movie.id);

    if (index > -1) {
      this.savedMovies.splice(index, 1);
      console.log('Película removida del array de películas guardadas');
    } else {
      this.savedMovies.push(movie);
      console.log('Película guardada correctamente en el array de películas guardadas');
    }

    this.saveInLocalStorage();
  }
  isMovieSaved(movie: Movie): boolean{
    return this.savedMovies.some((savedMovie) => savedMovie.id === movie.id);
  }
  private saveInLocalStorage() {
    localStorage.setItem('peliculas', JSON.stringify(this.savedMovies));
  }
}
