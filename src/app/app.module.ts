import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxPlotComponent } from './box-plot/box-plot.component';


@NgModule({
  declarations: [
    AppComponent,
    BoxPlotComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
