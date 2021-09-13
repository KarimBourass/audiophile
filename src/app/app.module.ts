import { CategoryModule } from './audiophile/pages/category/category.module';
import { HomeModule } from './audiophile/pages/home/home.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './audiophile/layout/header/header.component';
import { LayoutModule } from '@angular/cdk/layout';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule, // for breakpoint,
    HomeModule,
    SharedModule,
    CategoryModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
