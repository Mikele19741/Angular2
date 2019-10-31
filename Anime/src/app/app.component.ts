import { Component } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';
import { divTrigger, changeWithTrigger } from './app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('clickedDiv',[state('start',style({backgroundColor:'blue', width: '150px', height:'150px'})),
     state('end', style({backgroundColor:'red', width: '300px', height:'300px'})), 
     state('active',style({backgroundColor:'orange', width: '170px', height:'170px'})),
     transition('start <=> end', animate('800ms ease-in')), 
     transition('start=>active',animate('400ms')),
     transition('active=>end',animate('400ms'))
    ]),
    trigger('multi', [
      state('start',style({border:'5px solid black', width: '150px', height:'150px'})),
     state('end', style({background:'blue', width: '170px', height:'170px'})),
     transition('start <=> end', [
       style({
         background: 'red'
       }), animate(1500, style({
        background: 'yellow'
       })), animate(1000)
     ]), 
    ]), divTrigger, changeWithTrigger
  ]
})
export class AppComponent {
  clickedDivState='start';
  multiState='start';
  isVisible=false;
  changeDivState()
  {
    this.clickedDivState='end';
    setTimeout(()=>{this.clickedDivState='start';},3000);
  }
}
