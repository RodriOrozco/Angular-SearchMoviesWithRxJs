import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/app/interfaces/movie.interface';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.less'],
})
export class CardMovieComponent implements OnInit {
  @Input('movie') movie!: Movie;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log('movies: ', this.movie);
  }

  getImageNotFound(): string {
    if (this.movie.Poster === 'N/A') {
      return 'https://via.placeholder.com/600';
    } else {
      return this.movie.Poster;
    }
  }
}
