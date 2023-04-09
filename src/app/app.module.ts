import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { MoviesComponent } from './components/movies/movies.component';

import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './services/movies.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [AppComponent, CardMovieComponent, MoviesComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //Angular Material modules
    MatCardModule,
    MatInputModule,
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
