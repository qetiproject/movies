import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  searchFilter(event: any) {
    event.preventDefault();

    const enteredText = event.target.value;
    console.log(enteredText);
    // if (enteredText) {
    //   this.filterMovies = this.movies.filter(i => i.title.toLowerCase().indexOf(enteredText) >= 0);
    // } else {
    //   this.filterMovies = this.movies;
    // }
    // this.getArrayFromNumber(this.filterMovies.length);
  }
}
