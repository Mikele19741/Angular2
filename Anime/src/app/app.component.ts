import { Component } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('clickedDiv',[state('start',style({backgroundColor:'blue', width: '150px', height:'150px'})),
     state('end', style({backgroundColor:'red', width: '300px', height:'300px'})), transition('start => end', animate(1500)), transition('end=>start',animate('800ms 500ms ease-out'))])
  ]
})
export class AppComponent {
  clickedDivState='start';
  changeDivState()
  {
    this.clickedDivState='end';
    setTimeout(()=>{this.clickedDivState='start';},3000);
  }
}
