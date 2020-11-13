

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/master-page/header/header.component';
import { MasterPageComponent } from './modules/master-page/master-page.component';
import { FooterComponent } from './components/master-page/footer/footer.component';
import { SliderTopComponent } from './components/master-page/slider-top/slider-top.component';
import { MostSellComponent } from './components/master-page/most-sell/most-sell.component';
// import { NotFoundComponent } from './components/master-page/slider-top/NotFoundComponent';


@NgModule({
  declarations: [
    AppComponent,
    // NotFoundComponent,
    HeaderComponent,
    MasterPageComponent,
    FooterComponent,
    SliderTopComponent,
    MostSellComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
