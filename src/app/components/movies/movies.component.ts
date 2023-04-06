import { Component } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less'],
})
export class MoviesComponent {
  moviesFounded$!: Observable<Movie>;

  constructor(private moviesService: MoviesService) {}

  searchMovie(inputTerm: string): void {
    this.moviesFounded$ = this.moviesService
      .getMovieByTerm(inputTerm)
      .pipe(map((movies) => movies.Search));
    // this.moviesService.getMovieByTerm(inputTerm).subscribe((data) => {
    //   console.log(data);
    // });
  }
}
