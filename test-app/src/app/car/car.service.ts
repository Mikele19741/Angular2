import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";

export class CarService{
    private isVisible=true;
    showCar()
    {
        this.isVisible=true;
    }
    hideCar()
    {
        this.isVisible=false;
    }
    getVisibility()
    {
        return this.isVisible;
    }
    getCarName(): Observable<string>
    {
        return of('Ford').pipe(delay(100));

    }
}