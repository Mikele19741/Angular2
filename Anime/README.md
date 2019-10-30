Animations examples:
1. Animation with trigger

animations:[
    trigger('clickedDiv',[state('start',style({backgroundColor:'blue', width: '150px', height:'150px'})),
     state('end', style({backgroundColor:'red', width: '300px', height:'300px'})), transition('start => end', animate(1500)), transition('end=>start',animate('800ms 500ms ease-out'))])
  ]
  <div [@clickedDiv]="clickedDivState" (click)="changeDivState()"> 

</div>

2. Different states

  
  