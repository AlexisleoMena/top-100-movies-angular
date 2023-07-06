import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from '../interfaces/movie.interface';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>("assets/db.json");
  }
  getMovie(id: string): Observable<Movie | undefined> {
    return this.getMovies().pipe(
      map((movies: Movie[]) => movies.find((movie: Movie) => movie.id === id))
    );
  }
}
