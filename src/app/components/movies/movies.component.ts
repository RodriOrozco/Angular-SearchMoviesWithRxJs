import { Component, ElementRef, ViewChild } from '@angular/core';

import { Movie } from 'src/app/interfaces/movie.interface';
import { MoviesService } from 'src/app/services/movies.service';

import {
  Observable,
  Subscription,
  debounceTime,
  distinct,
  filter,
  fromEvent,
  map,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.less'],
})
export class MoviesComponent {
  @ViewChild('searchInputMovie', { static: true })
  searchInputMovie!: ElementRef;

  moviesFounded$!: Observable<Movie[]>;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesFounded$ = fromEvent<Event>(
      this.searchInputMovie.nativeElement,
      'keyup'
    ).pipe(
      map((event: Event) => {
        const searchTerm = (event.target as HTMLInputElement).value;
        return searchTerm;
      }),
      filter((searchTerm: string) => searchTerm.length > 3),
      debounceTime(500),
      distinct(),
      switchMap((searchTerm: string) =>
        this.moviesService.getMovieByTerm(searchTerm)
      )
    );
  }
}
