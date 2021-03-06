import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class CarsService
{
    addCar(carName: string) {
        const data={
            name:carName,
            color:'blue'

        };
      return this.http.post('http://localhost:3000/cars', data)
    }
    constructor( private http: HttpClient)
    {
      
    }
    getCars() {
       return  this.http.get('http://localhost:3000/cars');
    }
    changeColor(car: any, color:string){
        car.color=color;
        return  this.http.put('http://localhost:3000/cars/'+car.id, {car});
    }
    deleteCar(car: any){
        return  this.http.delete('http://localhost:3000/cars/'+car.id);
    }
}