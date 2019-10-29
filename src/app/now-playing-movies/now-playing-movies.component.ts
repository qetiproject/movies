import { MovieService } from './../services/movie.service';
import { Component, OnInit } from '@angular/core';
import {  MoviesList } from '../models/MoviesList';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-now-playing-movies',
  templateUrl: './now-playing-movies.component.html',
  styleUrls: ['./now-playing-movies.component.css']
})
export class NowPlayingMoviesComponent implements OnInit {

  movies: MoviesList[] = [];
  filterMovies: MoviesList[] = [];
  imageUrl: string = environment.movieDbApi.imageUrl;

  currentIndex = 0;
  pageIndexes = [];
  startIndex =0;
  endIndex = 6;

  constructor(private moviesService: MovieService) { }

  ngOnInit() {
    this.moviesService.getMovieList().subscribe( movie => {
      this.movies = movie.results;
      this.filterMovies = this.movies;
      this.getArrayFromNumber(this.movies.length);
    });
  }
  getArrayFromNumber(length) {
    this.pageIndexes = [];
    for (let i = 0; i < length / 6; i++) {
      this.pageIndexes.push(i + 1);
    }
  }
  updateIndex(pageIndex) {
    this.startIndex = pageIndex * 6;
    this.currentIndex = pageIndex;
    this.endIndex = this.startIndex + 6;
  }

  searchFilter(event: any) {
    event.preventDefault();

    const enteredText = event.target.value;
    if (enteredText) {
      this.filterMovies = this.movies.filter(i => i.title.toLowerCase().indexOf(enteredText) >= 0);
      console.log(this.filterMovies)
    } else {
      this.filterMovies = this.movies;
    }
    this.getArrayFromNumber(this.filterMovies.length);
  }
}
