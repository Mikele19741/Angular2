import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Bill } from '../models/bill.model';
import { Observable } from 'rxjs';
import { BaseApi } from 'src/app/shared/core/base-api';


@Injectable()
export class  BillService extends BaseApi{
  constructor(public http: HttpClient){
        super(http)
  }
  getBill(): Observable<Bill>{
    return this.get('bill')
  
}
  getCurrency(base:string='EUR') : Observable<any>{
    return this.http.get('http://data.fixer.io/api/latest?access_key=2db8ba6feea23d269c4ec48d4e3d3501&symbols=');
  }

  updateBill(bill: Bill) : Observable<Bill>
  {
     return this.put('bill', bill)
  }
}