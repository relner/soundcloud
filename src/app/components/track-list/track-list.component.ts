import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TracksCollection } from '../../models/models'

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {

  @Output() more = new EventEmitter();

  @Input() trackData;
  tracksCollection: TracksCollection;

  constructor() { }

  ngOnInit() {
    this.trackData = this.tracksCollection;
  }

  moreClick(){
    this.more.emit();
  }

}
