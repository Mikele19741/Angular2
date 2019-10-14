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
  colors =[
    'res', 'blue', 'green', 'pink', 'yellow', 'grey'
  ]
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
getRandColor() {
 const num=Math.round(Math.random() * (this.colors.length-1));
 return this.colors[num];
}
setNewColor(car: Cars){
  this.carsServ.changeColor(car, this.getRandColor() ).subscribe((car: Cars[])=>{
     
       return this.cars;
   
});
}

deleteCar(car: Cars){
  this.carsServ.deleteCar(car).subscribe((cars: Cars[])=>{
     
    this.cars = cars;
  
  });
   

}
}
