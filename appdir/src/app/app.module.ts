import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Backgrounddirective } from './directives/background.directive';
import { MyTestDirectiveDirective } from './directives/my-test-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    Backgrounddirective,
    MyTestDirectiveDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
