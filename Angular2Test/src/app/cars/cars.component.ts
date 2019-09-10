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
  items=[{id: 4, name:'11'},{id: 2, name:'22'},{id: 3, name:'33'}]
  dates=[ new Date(2015, 3,4), new Date(2011, 1,4), new Date(2013, 3,3), new Date(2016, 3,5)];
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
