import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
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
  movieType = '';
  pageTitle = 'All Movies';

  // movies on home page
  @Input() moviesType: string;
  constructor(private moviesService: MovieService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.url.subscribe(url => {
      this.movieType = url[1].toString();
      this.getMovies();
    });
  }

  getMovies(pageNumber: number = 1) {
    switch (this.movieType) {
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
      this.movies = movie.results;
      this.currentPage = movie.page;
      this.totalPages = movie.total_pages;
      this.getArrayFromNumber(movie.total_pages);
    });
  }

  getPopularMovies(pageNumber: number) {
    this.moviesService.getPopularMovies(pageNumber).subscribe(popularMovie => {
      this.movies = popularMovie.results;
      this.currentPage = popularMovie.page;
      this.totalPages = popularMovie.total_pages;
      this.getArrayFromNumber(popularMovie.total_pages);
    });
  }
  getTopRatedMovies(pageNumber: number = 1) {
    this.moviesService.getTopRatedMovies(pageNumber).subscribe(topRatedMovie => {
      this.movies = topRatedMovie.results;
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

}
