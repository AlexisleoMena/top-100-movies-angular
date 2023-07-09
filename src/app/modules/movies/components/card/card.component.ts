import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { SavedMoviesService } from '../../services/saved-movies.service';

@Component({
  selector: 'movie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() movie!: Movie;
  isMovieSaved = false;
  isHovered = false;
  
  constructor(private savedMoviesService: SavedMoviesService) {}

  ngOnInit() {
    this.isMovieSaved = this.savedMoviesService.isMovieSaved(this.movie);
  }

  saveMovie() {
    this.savedMoviesService.saveMovie(this.movie);
    this.isMovieSaved = this.savedMoviesService.isMovieSaved(this.movie);
  }
}
