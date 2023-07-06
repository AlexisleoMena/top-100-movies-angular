import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../interfaces/movie.interface';
import { MoviesService } from '../../services/movies.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: Movie | undefined;
  safeTrailerUrl!: any;


  constructor(
    private moviesService: MoviesService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ){}

  ngOnInit(): void {
    
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.moviesService.getMovie(id).subscribe((movie: Movie | undefined) => {
        this.movie = movie;
        this.safeTrailerUrl = this.sanitizer.bypassSecurityTrustResourceUrl(movie!.trailer);
      });
    });
  }
}
