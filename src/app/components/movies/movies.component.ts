import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesList } from 'src/app/models/MoviesList';
import { environment } from 'src/environments/environment';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies: MoviesList[] = [];
  imageUrl: string = environment.movieDbApi.imageUrl;

  currentPage = 1;
  totalPages = 1;
  pageIndexes = [];
  allMovies: MoviesList[] = [];
  @Output() moviesList = new EventEmitter();
  constructor(private moviesService: MovieService) { }

  ngOnInit() {
   this.getMovies();
  }

  getMovies(pageNumber: number = 1) {
    this.moviesService.getNowPlayingMovies(pageNumber).subscribe( movie => {
      this.movies = movie.results;
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
    this.pageIndexes = this.pageIndexes.filter(i => (i.id - 5 < this.currentPage) && (i.id + 5 > this.currentPage) );
  }

}
