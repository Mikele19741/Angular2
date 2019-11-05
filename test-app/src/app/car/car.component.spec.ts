import {CarComponent} from './car.component'
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CarService } from './car.service';
import { Observable, of } from 'rxjs';
import { delay } from "rxjs/operators";

describe('CarComponent', ()=>{

  let fixture: ComponentFixture<CarComponent>;
  let component: CarComponent;
beforeEach(()=>{
  TestBed.configureTestingModule({
    declarations: [CarComponent]
  });
   fixture=TestBed.createComponent(CarComponent);
   component=fixture.debugElement.componentInstance;
  
})

it('should create component instance', ()=>{
  
    expect(component).toBeTruthy();
});
it('It should renedr h1 tag with title', ()=>{
  
  fixture.detectChanges();
    const nativeEl=fixture.debugElement.nativeElement;
    const text=nativeEl.querySelector('h1').textContent;
    expect(text).toEqual('MyCarHeader');
});
it('should inject car service', ()=>
{
 
  const carServce=fixture.debugElement.injector.get(CarService);
  fixture.detectChanges();expect(component.isCarVisible).toEqual(carServce.getVisibility())
});
it('should display car is visible', ()=> {
  const carServce=fixture.debugElement.injector.get(CarService);
  carServce.showCar();
  fixture.detectChanges();
  const nativeEl=fixture.debugElement.nativeElement;
    const text=nativeEl.querySelector('span').textContent;
    expect(text).toEqual('Car is Visible');
});
it('should display car is not visible', ()=> {
  const carServce=fixture.debugElement.injector.get(CarService);
  carServce.hideCar();
  fixture.detectChanges();
  const nativeEl=fixture.debugElement.nativeElement;
    const text=nativeEl.querySelector('span').textContent;
    expect(text).not.toEqual('Car is Visible');
});
it(`shouldn't get car name if not async`, ()=> {
  const carServce=fixture.debugElement.injector.get(CarService);
  spyOn(carServce,'getCarName').and.returnValue(of('Ford').pipe(delay(100)));
  fixture.detectChanges();
  expect(component.carName).toBe(undefined);

});
it(`should get car name if async`, async()=> {
  const carServce=fixture.debugElement.injector.get(CarService);
  spyOn(carServce,'getCarName').and.returnValue(of('Ford').pipe(delay(100)));
  fixture.detectChanges();
  fixture.whenStable().then(()=>{
  expect(component.carName).toEqual('Ford')});

});
})