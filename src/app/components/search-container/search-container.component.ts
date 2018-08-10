import { Component, OnInit, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-search-container',
  templateUrl: './search-container.component.html',
  styleUrls: ['./search-container.component.css']
})
export class SearchContainerComponent implements OnInit {

  searchResult;

  @Output() search = new EventEmitter();

  constructor() { }
  ngOnInit() {}

  onSubmit(event){
    event.preventDefault();
    this.search.emit(this.searchResult);
  }



}
