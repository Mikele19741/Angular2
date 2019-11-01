Animations examples:
1. Animation with trigger

animations:[
    trigger('clickedDiv',[state('start',style({backgroundColor:'blue', width: '150px', height:'150px'})),
     state('end', style({backgroundColor:'red', width: '300px', height:'300px'})), transition('start => end', animate(1500)), transition('end=>start',animate('800ms 500ms ease-out'))])
  ]
  <div [@clickedDiv]="clickedDivState" (click)="changeDivState()"> 

</div>

2. Complex animations
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
    ])
  3. Empty state
  export const changeWithTrigger=trigger('changeWith', [

    transition('*=>*', [animate(1000, style({
      
        height:'10px'
    })),
    animate(1000, style({
       
        height:'*'
    }))

])
3. Group and Keyframes functions
export  const divTrigger=trigger('divTrigger', [

  ///void =>*
   transition(':enter', [
        style({
            height:'*',
            width:'*'
        }),
        group([
            animate(2000, style({
                height:'200px',
                width:'200px'
            
            })),
            animate(6000, keyframes([
                style({
                    backgroundColor:'blue'
                }),
                style({
                    backgroundColor:'yellow'
                }),
                style({
                    backgroundColor:'pink'
                })
            ]) )
        ]),
        
        animate(1000)
        ])
        
    
]);

4 Events 
(@divTrigger.start)="onAnimationStart($event)"
(@divTrigger.done)="onAnimationDone($event)">
onAnimationDone(event: AnimationEvent)
  {

  }
  onAnimationStart(event: AnimationEvent)
  {

  }

  
  