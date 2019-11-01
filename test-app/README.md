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
