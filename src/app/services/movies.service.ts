import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../interfaces/movie.interface';

@Injectable()
export class MoviesService {
  //key 9890f6b1

  private API_URL: string = 'http://www.omdbapi.com/?apikey=9890f6b1';

  constructor(private http: HttpClient) {}

  getMovieByTerm(searchTerm: string): Observable<any> {
    return this.http.get(`${this.API_URL}&s=${searchTerm}`);
  }
}
