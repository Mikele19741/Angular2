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
  cars = ["Ford", "Audi", "BMV", "Wolkswagen"]; 
  items=[{id: 4, name:'11'},{id: 2, name:'22'},{id: 3, name:'33'}]
  dates=[ new Date(2015, 3,4), new Date(2011, 1,4), new Date(2013, 3,3), new Date(2016, 3,5)];
 constructor(){

 }
   addCar()
   {
     this.addCarsStatus=true;
     this.cars.push(this.carName);
     this.carName='';
   }
   onKeyUp(value)
   {
     this.inputText=value;
   }
   setBigCarText(car:string)
   {
      return car.length>3 ? true:false;
   }
}
