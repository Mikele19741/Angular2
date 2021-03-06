import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { SystemRoutingModule } from './system-routing.module';
import { BillPageComponent } from './bill-page/bill-page.component';
import { HistoryPageComponent } from './history-page/history-page.component';
import { PlanningPageComponent } from './planning-page/planning-page.component';
import { RecordsPageComponent } from './records-page/records-page.component';
import { SystemComponent } from './system.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { DropDownDirective } from './shared/directives/dropdown.directive';
import { BillCardComponent } from './bill-page/bill-card/bill-card.component';
import { CurrencyCardComponent } from './bill-page/currency-card/currency-card.component';
import { BillService } from './shared/services/bill.service';
import { MomentPipe } from './shared/pipes/moment.pipe';
import { AddEventComponent } from './records-page/add-event/add-event.component';
import { AddCategoryComponent } from './records-page/add-category/add-category.component';
import { EditCatregoryComponent } from './records-page/edit-catregory/edit-catregory.component';
import { CategoriesSerivce } from './shared/services/categories.service';
import { EventsService } from './shared/services/events.service';
import { HistroyEventsComponent } from './history-page/histroy-events/histroy-events.component';
import { HistroyDetailsComponent } from './history-page/histroy-details/histroy-details.component';
import { HistroyFilterComponent } from './history-page/histroy-filter/histroy-filter.component';
import { HistoryChartComponent } from './history-page/history-chart/history-chart.component';
import { FilterPipe } from './shared/pipes/filter.pipe';


@NgModule({
   
    imports: [
     CommonModule,
     SharedModule,
     SystemRoutingModule
    
    ],
 
    declarations: [BillPageComponent, HistoryPageComponent, PlanningPageComponent, 
      RecordsPageComponent, SystemComponent, SidebarComponent, HeaderComponent, DropDownDirective, BillCardComponent, CurrencyCardComponent
    , MomentPipe, AddEventComponent, AddCategoryComponent, EditCatregoryComponent, HistroyEventsComponent, HistroyDetailsComponent, HistroyFilterComponent, HistoryChartComponent, FilterPipe],
      providers:[BillService, CategoriesSerivce, EventsService] 
  })
export class SystemModule{

}