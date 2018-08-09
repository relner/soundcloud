import { Component, OnInit, Input } from '@angular/core';
import { Track } from '../../models/models';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {

  constructor() { }

  @Input() myTrack: Track;

  URL = `https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/`
  urlTrack: string;

  ngOnInit() {
    this.urlTrack = this.URL + this.myTrack.id;
  }

}
