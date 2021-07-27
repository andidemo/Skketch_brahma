import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BadabroComponent } from './component/badabro/badabro.component';
import { NewsComponent } from './component/news/news.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { SketchBrahmaComponent } from './component/sketch-brahma/sketch-brahma.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    BadabroComponent,
    NewsComponent,
    SketchBrahmaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
