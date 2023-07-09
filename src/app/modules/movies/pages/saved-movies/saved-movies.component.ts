import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { SavedMoviesService } from '../../services/saved-movies.service';

@Component({
  selector: 'app-saved-movies',
  templateUrl: './saved-movies.component.html',
  styleUrls: ['./saved-movies.component.css'],
})
export class SavedMoviesComponent implements OnInit {
  savedMovies: Movie[] = [];

  constructor(private savedMoviesService: SavedMoviesService){}
  ngOnInit(): void {
    this.savedMovies = this.savedMoviesService.savedMovies;
  }
}
