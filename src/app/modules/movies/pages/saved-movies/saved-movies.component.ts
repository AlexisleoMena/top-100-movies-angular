import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { SavedMoviesService } from '../../services/saved-movies.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-saved-movies',
  templateUrl: './saved-movies.component.html',
  styleUrls: ['./saved-movies.component.css'],
})
export class SavedMoviesComponent implements OnInit {
  savedMovies: Movie[] = [];

  constructor(
    private savedMoviesService: SavedMoviesService,
    private _snackBar: MatSnackBar
  ) {}
  ngOnInit(): void {
    this.savedMovies = this.savedMoviesService.savedMovies;
    this.savedMoviesService.setComponentRef(this);
  }

  openSnackBar() {
    this._snackBar.open(this.savedMoviesService.message, 'Close', {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      duration: 2000,
      panelClass: 'snackbar-button',
    });
  }
}
