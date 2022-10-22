import { ThisReceiver } from '@angular/compiler';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TracksService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';
import * as dataRaw from '../../../../data/tracks.json'
@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit, OnDestroy{
  tracksTrending: Array<TrackModel>= []
  tracksRandom: Array<TrackModel>= []

  listObservers$: Array<Subscription> =[]

  constructor(private trackService: TracksService) { }

  ngOnInit(): void {
    const observer1$ = this.trackService.dataTracksRandom$
    .subscribe(Response =>{
      this.tracksTrending = Response
      this.tracksRandom = Response
      console.log('Canciones trending --->', Response)
    })

    const observer2$ = this.trackService.dataTracksRandom$
    .subscribe(Response =>{
      this.tracksRandom = [... this.tracksRandom, ... Response]
      console.log('Canciones random entrando .... --->', Response)
    })

    this.listObservers$ =[observer1$, observer2$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
    
  }

}

