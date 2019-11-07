import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Output() SearchClicked = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  searchFilter(enteredText: string) {
    this.SearchClicked.emit(enteredText);
  }
}
