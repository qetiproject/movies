import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
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
  pageTitle = 'All Movies';

  // movies on home page
  // tslint:disable-next-line: no-input-rename
  @Input('moviesType') moviesType: string;
  constructor(private moviesService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      let movieType = this.moviesType;
      if (url[1]) {
        movieType = url[1].toString();
      }
      this.getMovies(movieType);
    });
  }

  getMovies(type: string, pageNumber: number = 1) {
    switch (type) {
      case 'nowPlaying':
          this.getNowPlayingMovies(pageNumber);
          this.pageTitle = 'Now Playing Movies';
          break;
      case 'popular':
        this.getPopularMovies(pageNumber);
        this.pageTitle = 'Popular Movies';
        break;
      case 'top-rated':
        this.getPopularMovies(pageNumber);
        this.pageTitle = 'Top Rated Movies';
        break;
    }
  }
  getNowPlayingMovies(pageNumber: number) {
    this.moviesService.getNowPlayingMovies(pageNumber).subscribe( movie => {
      this.moviesType
        ? this.movies = movie.results.slice(0, 4)
        : this.movies = movie.results;

      this.currentPage = movie.page;
      this.totalPages = movie.total_pages;
      this.getArrayFromNumber(movie.total_pages);
    });
  }

  getPopularMovies(pageNumber: number) {
    this.moviesService.getPopularMovies(pageNumber).subscribe(popularMovie => {
      this.moviesType
      ? this.movies = popularMovie.results.slice(0, 4)
      : this.movies = popularMovie.results;
      this.currentPage = popularMovie.page;
      this.totalPages = popularMovie.total_pages;
      this.getArrayFromNumber(popularMovie.total_pages);
    });
  }
  getTopRatedMovies(pageNumber: number = 1) {
    this.moviesService.getTopRatedMovies(pageNumber).subscribe(topRatedMovie => {
      this.moviesType
      ? this.movies = topRatedMovie.results.slice(0, 4)
      : this.movies = topRatedMovie.results;
      this.currentPage = topRatedMovie.page;
      this.totalPages = topRatedMovie.total_pages;
      this.getArrayFromNumber(topRatedMovie.total_pages);
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

  getSearchedMovies(searchText: string) {
    this.moviesService.searchMovies(searchText).subscribe( movies => {
      this.moviesType = this.movies = movies.results;
      this.currentPage = movies.page;
      this.totalPages = movies.total_pages;
      this.getArrayFromNumber(movies.total_pages);
    });
  }
}
