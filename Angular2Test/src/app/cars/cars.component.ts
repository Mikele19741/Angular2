import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  encapsulation: ViewEncapsulation.Native
})
export class CarsComponent {


 inputText='';

  addCarsStatus=false;
  cars = 
  [{name:"Ford",
    year:2015},{name:"Lada", year:2018}]; 
  
 constructor(){

 }
 
   onKeyUp(value)
   {
     this.inputText=value;
   }
   setBigCarText(car:string)
   {
      return car.length>3 ? true:false;
   }
   updateCarList(car: {name: string, year:number})
   {
      this.cars.push(car);
   }
}
