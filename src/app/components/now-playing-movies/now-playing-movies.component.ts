import { MovieService } from '../../services/movie.service';
import { Component, OnInit } from '@angular/core';
import {  MoviesList } from '../../models/MoviesList';
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

  currentPage = 1;
  totalPages = 1;
  pageIndexes = [];

  constructor(private moviesService: MovieService) { }

  ngOnInit() {
   this.getMovies();
  }

  
  getMovies(pageNumber: number = 1) {
    this.moviesService.getMovieList(pageNumber).subscribe( movie => {
      this.movies = movie.results;
      console.log(this.movies)
      this.filterMovies = this.movies;
      this.currentPage = movie.page;
      this.totalPages = movie.total_pages;
      this.getArrayFromNumber(movie.total_pages);
    });
  }

  getArrayFromNumber(length) {
    this.pageIndexes = [];
    for (let i = 1; i <= length; i++) {
      this.pageIndexes.push({
        id: i,
        value: i
      });
    }
    // this.pageIndexes = this.pageIndexes.filter(i => ((i.id - 10) < this.currentPage) );
    this.pageIndexes = this.pageIndexes.filter(i => {
      if (i.id + 5 > this.currentPage) {

        if ( (i.id - 5 < this.currentPage) && (i.id + 5 > this.currentPage) ) {
          return i;
        }
      }
    });
  }

  searchFilter(event: any) {
    event.preventDefault();

    const enteredText = event.target.value;
    if (enteredText) {
      this.filterMovies = this.movies.filter(i => i.title.toLowerCase().indexOf(enteredText) >= 0);
    } else {
      this.filterMovies = this.movies;
    }
    this.getArrayFromNumber(this.filterMovies.length);
  }
}
