import { BaseApi } from 'src/app/shared/core/base-api';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WFMEvent } from '../models/event.model';
import { Observable } from 'rxjs';


@Injectable()
export class EventsService extends BaseApi{
    constructor(public http: HttpClient){
        super(http)
    
    }

    addEvent(event: WFMEvent) : Observable<WFMEvent>{
        return this.post('events', event)
    }
    getEvents() : Observable<WFMEvent[]> {
        return this.get('events');

    }
    getEventById(id:string) : Observable<WFMEvent>{
        return this.get('events/'+id);
    }
}