import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

carName: string ="Ford";
carYear: string="2015"
getName(){
return this.carName;
}

}
