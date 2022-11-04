import { Component, OnInit } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  listResults$: Observable<any> = of([])
  constructor(private searchService:SearchService) { }

  ngOnInit(): void {
  }

  receiveData(event:string): void{
    //TODO: agarras el yretmino y sabes que solo se ejecuta cuando tiene 3 caracteres
    console.log('Estoy en el padre jua jua...', event);
    this.listResults$ =  this.searchService.searchTracks$(event)

    
  }

}