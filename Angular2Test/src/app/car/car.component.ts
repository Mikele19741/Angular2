
import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import { stat } from 'fs';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent {

@Input('carItem') car: {name: string, year: number}


constructor()
{

}
}
