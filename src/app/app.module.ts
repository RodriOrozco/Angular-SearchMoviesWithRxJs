import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { MoviesComponent } from './components/movies/movies.component';

import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';

@NgModule({
  declarations: [AppComponent, CardMovieComponent, MoviesComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
