import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchContainerComponent } from './components/search-container/search-container.component';
import { TrackListComponent } from './components/track-list/track-list.component';
import { TrackComponent } from './components/track/track.component';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    SearchContainerComponent,
    TrackListComponent,
    TrackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
