import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { MoviesList } from 'src/app/models/MoviesList';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-popular-movie',
  templateUrl: './popular-movie.component.html',
  styleUrls: ['./popular-movie.component.css']
})
export class PopularMovieComponent implements OnInit {
  movies: MoviesList[] = [];
  imageUrl: string = environment.movieDbApi.imageUrl;

  currentPage = 1;
  totalPages = 1;
  pageIndexes = [];
  allMovies: MoviesList[] = [];

  constructor(private moviesService: MovieService) { }

  ngOnInit() {
    this.getPopularMovies();
  }

  getPopularMovies(pageNumber: number = 1) {
    this.moviesService.getPopularMovies(pageNumber).subscribe(popularMovie => {
      this.movies = popularMovie.results;
      this.currentPage = popularMovie.page;
      this.totalPages = popularMovie.total_pages;
      this.getArrayFromNumber(popularMovie.total_pages);
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
