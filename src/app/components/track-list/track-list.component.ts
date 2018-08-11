import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  @Output() more = new EventEmitter();
  @Input() trackData;

  constructor() { }

  ngOnInit() {}

  moreClick(){
    this.more.emit();
  }

}
