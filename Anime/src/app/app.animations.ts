import { trigger, style, state, transition, animate } from '@angular/animations';
export  const divTrigger=trigger('divTrigger', [

  ///void =>*
   transition(':enter', [
        style({
            opacity:0 
         }), animate(500,  style({
            opacity:1 
         }))
        ]),
        ///*=>void
         transition(':leave', 
            animate(500,  style({
                opacity:0 
             })))
    
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