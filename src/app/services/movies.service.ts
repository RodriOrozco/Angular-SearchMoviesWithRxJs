import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { ApiInfoMovie, Movie } from '../interfaces/movie.interface';

@Injectable()
export class MoviesService {
  //key 9890f6b1

  private API_URL: string = 'http://www.omdbapi.com/?apikey=9890f6b1';

  constructor(private http: HttpClient) {}

  getMovieByTerm(searchTerm: string): Observable<Movie[]> {
    return this.http
      .get<ApiInfoMovie>(`${this.API_URL}&s=${searchTerm}`)
      .pipe(map((data) => data.Search));
  }
}
