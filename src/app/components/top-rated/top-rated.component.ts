import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';
import { MoviesList } from 'src/app/models/MoviesList';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {
  movies: MoviesList[] = [];
  imageUrl: string = environment.movieDbApi.imageUrl;

  currentPage = 1;
  totalPages = 1;
  pageIndexes = [];
  allMovies: MoviesList[] = [];

  constructor(private moviesService: MovieService) { }

  ngOnInit() {
    this.getTopRatedMovies();
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
