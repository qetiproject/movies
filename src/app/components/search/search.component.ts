import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MoviesList } from 'src/app/models/MoviesList';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  search: string = '';
  filterMovies: MoviesList[] = [];

  @Output() SearchClicked = new EventEmitter();
  moviesService: any;

  constructor() { }

  ngOnInit() {
  }
  searchFilter(enteredText: string) {
    this.SearchClicked.emit(enteredText);
  }
}
