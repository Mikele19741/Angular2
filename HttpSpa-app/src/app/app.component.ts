import { Component} from '@angular/core';
import { CarsService } from './cars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cars = [
  ];
  constructor(private carsServ: CarsService)
  {

  }
 
  loadCars()
  {
    this.carsServ.getCars().subscribe((data: any[])=>{
      console.log(data);
      this.cars = data;
    });
     
  }
}
