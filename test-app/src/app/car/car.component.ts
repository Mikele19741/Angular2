import { Component, OnInit } from '@angular/core';
import { CarService } from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers:[CarService]
})
export class CarComponent implements OnInit {
 isCarVisible:boolean;
  carName:string;
title='MyCarHeader';
constructor(private carServce:CarService)
{

}
  ngOnInit() {
    this.isCarVisible=this.carServce.getVisibility();
    this.carServce.getCarName().subscribe(carName=>this.carName=carName);
  }
  
}
