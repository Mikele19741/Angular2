import { Component} from '@angular/core';
import { CarsService } from './cars.service';
/////https://github.com/typicode/json-server
interface Cars{
  name: string;
  color:string;
  id:number;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  cars: Cars[] = [
  ];
  carName:string='';
  constructor(private carsServ: CarsService)
  {

  }
 
  loadCars()
  {
    this.carsServ.getCars().subscribe((cars: Cars[])=>{
     
      this.cars = cars;
    
    });
     
  }
  addCar()
  {
      this.carsServ.addCar(this.carName).subscribe((car: Cars)=>{
     
       
        this.cars.push(car);
  });
}
}
