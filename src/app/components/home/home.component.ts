import { MovieService } from './../../services/movie.service';
import { MoviesList } from './../../models/MoviesList';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  moviesType = 'nowPlaying';
  movies: MoviesList[];
  constructor(
    private moviesService: MovieService
  ) { }

  ngOnInit() {
  //  this.showMovie();
  }
  // showMovie(pageNumber: number) {
  //   switch (this.moviesType) {
  //     case 'nowPlaying':
  //         this.getNowPlayingMovies(pageNumber);
  //         break;
  //   }
  // }
  // getNowPlayingMovies(pageNumber: number = 1) {
  //   this.moviesService.getNowPlayingMovies(pageNumber).subscribe( movie => {
  //     this.movies = movie.results;
  //   });
  // }

}
