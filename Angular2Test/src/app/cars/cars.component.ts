import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {


 inputText='';
 carName='';
  addCarsStatus=false;
 constructor(){

 }
   addCar()
   {
     this.addCarsStatus=true;
   }
   onKeyUp(value)
   {
     this.inputText=value;
   }
}
