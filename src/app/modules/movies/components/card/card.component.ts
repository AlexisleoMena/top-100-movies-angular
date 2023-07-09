import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { SavedMoviesService } from '../../services/saved-movies.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'movie-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() movie!: Movie;
  isMovieSaved = false;
  isHovered = false;
  isLoading = false;
  private savedMoviesSubscription: Subscription | undefined;
  
  constructor(private savedMoviesService: SavedMoviesService) {}

  ngOnInit() {
    this.isMovieSaved = this.savedMoviesService.isMovieSaved(this.movie);
    this.savedMoviesSubscription = this.savedMoviesService.savedMoviesChanged.subscribe(() => {
      this.isMovieSaved = this.savedMoviesService.isMovieSaved(this.movie);
    });
  }

  saveMovie() {
    this.savedMoviesService.saveMovie(this.movie);
    this.isMovieSaved = this.savedMoviesService.isMovieSaved(this.movie);
  }

  ngOnDestroy() {
    if (this.savedMoviesSubscription) {
      this.savedMoviesSubscription.unsubscribe();
    }
  }
}
