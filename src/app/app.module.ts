

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/master-page/header/header.component';
import { MasterPageComponent } from './modules/master-page/master-page.component';
import { FooterComponent } from './components/master-page/footer/footer.component';
import { SliderTopComponent } from './components/master-page/slider-top/slider-top.component';
import { MostSellComponent } from './components/master-page/most-sell/most-sell.component';
import { BannerWrappComponent } from './componnets/master-page/banner-wrapp/banner-wrapp.component';
import { TabsComponent } from './componnets/master-page/tabs/tabs.component';
import { NewsletterComponent } from './components/master-page/newsletter/newsletter.component';
import { BlogWraapComponent } from './components/master-page/blog-wraap/blog-wraap.component';
import { AboutComponent } from './components/about/about.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
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
    BannerWrappComponent,
    TabsComponent,
    NewsletterComponent,
    BlogWraapComponent,
    AboutComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
