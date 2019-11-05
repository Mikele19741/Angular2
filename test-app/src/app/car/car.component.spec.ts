import {CarComponent} from './car.component'
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { CarService } from './car.service';

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
})