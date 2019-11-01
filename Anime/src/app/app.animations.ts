import { trigger, style, state, group, transition, animate, keyframes } from '@angular/animations';
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

export const changeWithTrigger=trigger('changeWith', [

    transition('*=>*', [animate(1000, style({
      
        height:'10px'
    })),
    animate(1000, style({
       
        height:'*'
    }))

])
]);