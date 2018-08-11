import { Component, OnInit } from '@angular/core';
import {DataService} from './services/data.service';
import { TracksCollection } from './models/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  mytrackData: TracksCollection;

  constructor(private dataService: DataService){}

  ngOnInit(): void {}

  searchTrack(event){
    this.dataService.getTracks(event).subscribe(data => {
      console.log(data);
      this.mytrackData = data;
    });
  }
  
  nextPage(){
    this.dataService.addNextPage(this.mytrackData.next_href).subscribe(data => {
      console.log(data);
      this.mytrackData.collection = this.mytrackData.collection.concat(data.collection);
      if(data.next_href !== undefined){this.mytrackData.next_href = data.next_href}
    });
  }


}
