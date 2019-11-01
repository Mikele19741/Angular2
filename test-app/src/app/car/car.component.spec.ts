import {CarComponent} from './car.component'
import { TestBed } from '@angular/core/testing';

describe('CarComponent', ()=>{
beforeEach(()=>{
  TestBed.configureTestingModule({
    declarations: [CarComponent]
  });
  
})

it('should create component instance', ()=>{
    const fixture=TestBed.createComponent(CarComponent);
    const component=fixture.debugElement.componentInstance;
    expect(component).toBeTruthy();
});
it('It should renedr h1 tag with title', ()=>{
  const fixture=TestBed.createComponent(CarComponent);
  fixture.detectChanges();
    const component=fixture.debugElement.nativeElement;
    const text=component.querySelector('h1').textContent;
    expect(text).toEqual('MyCarHeader');
})
})