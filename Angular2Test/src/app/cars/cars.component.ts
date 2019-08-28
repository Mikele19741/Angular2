import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  canAddCars=false;
  constructor (){
    setTimeout(()=>{
      this.canAddCars=true
    }, 4000)
  }

}
