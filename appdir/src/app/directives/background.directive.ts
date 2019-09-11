import { Directive, ElementRef, OnInit, Renderer2, HostListener, HostBinding, Input } from '@angular/core';


@Directive({
   selector:'[appBackground]'
  })
export class Backgrounddirective implements OnInit{
    @Input('appBackground')  hoverColor: string='green';
    @Input()  defaultColor: string='transparent';
    @HostBinding('style.backgroundColor') background: string;
   constructor()
   {
       
   }
   ngOnInit()
   {
      
       this.background=this.defaultColor;
   }
   @HostListener('mouseenter') mouseEnter()
   {
    this.background=this.hoverColor;
    
   }
   @HostListener('mouseleave') nouseLeave()
   {
    this.background=this.defaultColor;
    
   }
}