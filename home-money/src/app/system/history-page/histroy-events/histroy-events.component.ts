import { Component, OnInit, Input } from '@angular/core';
import { Category } from '../../shared/models/category.model';
import { WFMEvent } from '../../shared/models/event.model';
import { EventsService } from '../../shared/services/events.service';
import { CategoriesSerivce } from '../../shared/services/categories.service';

@Component({
  selector: 'wfm-histroy-events',
  templateUrl: './histroy-events.component.html',
  styleUrls: ['./histroy-events.component.scss']
})
export class HistroyEventsComponent implements OnInit {

  @Input() categories: Category[] = [];
  @Input() events: WFMEvent[] = [];

  constructor() {
}

  ngOnInit() {

  }

  getEventClass(e: WFMEvent) {
    this.events.forEach((e) => {
      e.catName = this.categories.find(c => c.id === e.category).name;
    });
    return {
      'label': true,
      'label-danger': e.type === 'outcome',
      'label-success': e.type === 'income'
    };
  }
}
