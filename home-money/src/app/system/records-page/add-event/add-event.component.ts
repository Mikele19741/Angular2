import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Category } from '../../shared/models/category.model';
import { NgForm } from '@angular/forms';
import { WFMEvent } from '../../shared/models/event.model';
import * as moment from 'moment'
import { EventsService } from '../../shared/services/events.service';
import { BillService } from '../../shared/services/bill.service';
import { Bill } from '../../shared/models/bill.model';
import { Message } from 'src/app/shared/models/message.model';
import { Subscription } from 'rxjs';


@Component({
  selector: 'wfm-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit,  OnDestroy {
  ngOnDestroy(): void {
   if(this.sub1) this.sub1.unsubscribe;
   if(this.sub2)this.sub2.unsubscribe;
  }
sub1: Subscription;
sub2: Subscription;
@Input() categories: Category[]=[];
  constructor(private eventsSevice: EventsService, private billService : BillService) { }
 types=[
   {type: 'income', label: 'Доход'},
   {type: 'outcome', label: 'Расход'}
 ];
 message: Message;
  ngOnInit() {
    this.message=new Message('danger', '');
  }
  private showMessage(text: string)
  {
       this.message.text=text;
       window.setTimeout(()=> this.message.text='', 5000); 
  }
   onSubmit(form:NgForm)
   {
      let {  amount, description, category,type}=form.value;
      if(amount<0) amount *=-1;
      const event= new WFMEvent(
        type, amount, +category, moment().format('DD.MM.YYYY HH:mm:ss'), description
      );
      
      this.sub1=this.billService.getBill().subscribe((bill: Bill)=>{
        let value=0;
        if(type==='outcome')
        {
            if(amount> bill.value)
            {
              this.showMessage("На счету мало денег")
             return;
              
            }
            else{
              value=bill.value-amount;
            }
        }
        else{
            value=bill.value+amount;
            
        }
        this.sub2=this.billService.updateBill({value, currency: bill.currency})
            .mergeMap(()=> this.eventsSevice.addEvent(event))
            .subscribe(()=>{
              form.reset();
            });

      });
    
   }
}
