import { Component, OnInit } from '@angular/core';
import { Movie } from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css'],
})
export class ListMoviesComponent implements OnInit {
  
  movies: Movie[] = [];
  currentMovies: Movie[] = [];
  moviesPerPage: number = 8;
  genres: string[] = [];
  
  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = movies;
      this.currentMovies = this.movies.slice(0, this.moviesPerPage);
      this.genres = Array.from(new Set([...movies.map(({ genre }) => genre)].flat())).sort();
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.movies.length) {
      endIndex = this.movies.length;
    }
    this.currentMovies = this.movies.slice(startIndex, endIndex);
  }
}
