import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'wfm-histroy-chart',
  templateUrl: './history-chart.component.html',
  styleUrls: ['./history-chart.component.scss']
})
export class HistoryChartComponent implements OnInit {

 @Input()  data;
  
  ngOnInit() {
    console.log(this.data)
  }
 
}
