import { Router, ActivatedRoute } from '@angular/router';
import { MoviesList } from 'src/app/models/MoviesList';
import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string = '';
  filterMovies: MoviesList[] = [];
  constructor(
    private movieservice: MovieService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
  }
  searchFilter(event: any) {
    event.preventDefault();
    const enteredText = event.target.value;
    this.search = enteredText;
    this.movieservice.searchMovies(this.search).subscribe( search => {
     search.results.forEach(movie => {
       if (movie.title.toLowerCase() === this.search) {
          this.filterMovies = movie;
          // console.log(this.filterMovies);
        }
     });
  });
  }
}
