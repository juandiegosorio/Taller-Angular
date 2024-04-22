import { Component, OnInit } from '@angular/core';
import { Serie } from './serie'
import { dataSeries } from './dataSeries'
import { SerieService } from './serie.service';


@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
calculateAverage(arg0: Serie[]) {
  let totalSeasons = 0;
  for (let serie of arg0) {
    totalSeasons += serie.seasons;
  }
  const average = totalSeasons / arg0.length;
  return average;
}


  constructor(private serieService: SerieService) { }
  series: Array<Serie> = [];

  getSeries(){
    this.serieService.getSeries().subscribe(series =>{
      this.series = series;})
  }
  ngOnInit() {
    this.getSeries();
  }

}
