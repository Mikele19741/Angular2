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

3. Pipe Testing
describe('PowPipe', ()=>{
let pipe: PowPipe;
beforeEach(()=>{
pipe=new PowPipe();
});

it('should create instance', ()=>{
expect(pipe).toBeTruthy();
expect(pipe.transform).toBeDefined;
});
it('should return 8 if called with 2 and 3', ()=>{
  const result =pipe.transform(2,3);
  expect(result).toBe(8);
    });
});

4. Directive testing
describe('ColorDirective', ()=>{
 let directive: ColorDirective
 beforeEach(()=>{
directive=new ColorDirective();
 });

 it('should create Instance', ()=>{
    expect(directive).toBeTruthy(); 
 });
 it('should change color to red when click', ()=>{
     directive.onClick();
    expect(directive.color).toBe('red'); 
 })