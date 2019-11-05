1 Test components.  

code ts
it('It should renedr h1 tag with title', ()=>{
  const fixture=TestBed.createComponent(CarComponent);
  fixture.detectChanges();
    const component=fixture.debugElement.nativeElement;
    const text=component.querySelector('h1').textContent;
    expect(text).toEqual('MyCarHeader');
})
})
html
<h1>{{title}}</h1> Please note !!!!!!!!!! tag with out blanks
2. Testing service

it('should inject car service', ()=>
{
 
  const carServce=fixture.debugElement.injector.get(CarService);
  fixture.detectChanges();expect(component.isCarVisible).toEqual(carServce.getVisibility())
});