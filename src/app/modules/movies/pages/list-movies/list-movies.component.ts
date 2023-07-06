import { Component, OnInit, ViewChild } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css'],
})
export class ListMoviesComponent implements OnInit {
  allMovies: Movie[] = [];
  movies: Movie[] = [];
  currentMovies: Movie[] = [];
  isLoading: boolean = true;
  moviesPerPage: number = 8;
  genres: string[] = [];
  selectedGenre: string = 'All Genres';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.allMovies = movies;
      this.movies = [...this.allMovies];
      this.currentMovies = this.movies.slice(0, this.moviesPerPage);

      this.genres = Array.from(
        new Set([...this.allMovies.map(({ genre }) => genre)].flat())
      ).sort();
      this.genres.unshift(this.selectedGenre);
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.movies.length) {
      endIndex = this.movies.length;
    }
    this.currentMovies = this.movies.slice(startIndex, endIndex);
  }

  selectGenre(genre: string): void {
    this.selectedGenre = genre;

    this.movies =
      genre === 'All Genres'
        ? [...this.allMovies]
        : this.allMovies.filter((m) => m.genre.find((g) => g === genre));

    this.currentMovies =
      this.movies.length <= this.moviesPerPage
        ? this.movies.slice()
        : this.movies.slice(0, this.moviesPerPage);
    this.resetPaginator();
  }

  resetPaginator() {
    if (this.paginator) {
      this.paginator.length = this.movies.length;
      this.paginator.pageIndex = 0;
      this.paginator.firstPage();
    }
  }
}
