import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../interfaces/movie.interface';

@Component({
  selector: 'app-home-movies',
  templateUrl: './home-movies.component.html',
  styleUrls: ['./home-movies.component.css']
})
export class HomeMoviesComponent implements OnInit {
  movies: Movie[] = [];
  randomMovie: Movie | undefined;
  imagesMovies: string[] = [];
  showBlur: boolean = false;

  constructor(private moviesService: MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies().subscribe((movies) => {
      this.movies = movies;
      this.randomMovie = this.getRandomMovie();
      this.imagesMovies = [movies[0].image, movies[1].image, movies[2].image ]
      setTimeout(() => {
        this.showBlur = true; 
      }, 300);
    });
  }

  getRandomMovie(): Movie | undefined {
    if (this.movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * this.movies.length);
      return this.movies[randomIndex];
    }
    return undefined;
  }

}
