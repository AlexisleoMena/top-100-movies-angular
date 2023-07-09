import { Injectable } from '@angular/core';
import { Movie } from '../interfaces/movie.interface';
import { SavedMoviesComponent } from '../pages/saved-movies/saved-movies.component';
import { ListMoviesComponent } from '../pages/list-movies/list-movies.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SavedMoviesService {
  savedMovies: Movie[] = [];
  message: string = '';
  isLoading: boolean = false;
  componentRef: SavedMoviesComponent | ListMoviesComponent | null = null;
  savedMoviesChanged = new Subject<void>();
  
  constructor() {
    const savedMoviesString = localStorage.getItem('peliculas');
    if (savedMoviesString) {
      this.savedMovies = JSON.parse(savedMoviesString);
    }
  }

  setComponentRef(componentRef: SavedMoviesComponent| ListMoviesComponent) {
    this.componentRef = componentRef;
  }

  saveMovie(movie: Movie) {
    this.isLoading = true;
    setTimeout(() => {
      const index = this.savedMovies.findIndex(
        (savedMovie) => savedMovie.id === movie.id
        );
        
        if (index > -1) {
          this.savedMovies.splice(index, 1);
          this.message = 'Movie removed!';
        } else {
          this.savedMovies.push(movie);
          this.message = 'Movie saved!';
        }
        this.savedMoviesChanged.next();
        this.saveInLocalStorage();
        if (this.componentRef) {
          this.componentRef.openSnackBar();
        }
        this.isLoading = false;
      }, 1000)
  }
  isMovieSaved(movie: Movie): boolean {
    return this.savedMovies.some((savedMovie) => savedMovie.id === movie.id);
  }
  private saveInLocalStorage() {
    localStorage.setItem('peliculas', JSON.stringify(this.savedMovies));
  }
}
