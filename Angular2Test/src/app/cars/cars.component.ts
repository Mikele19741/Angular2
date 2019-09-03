import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

 addCarsStatus='';
 inputText='';
 constructor(){

 }
   addCar()
   {
     this.addCarsStatus='Машина добавлена';
   }
   onKeyUp(value)
   {
     this.inputText=value;
   }
}
