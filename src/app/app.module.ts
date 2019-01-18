import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieDisplayComponent } from './movie-display/components/movie-display.component';
import { AppCommonModule } from './common/app-common.module';
import { BrowserXhr, HttpModule } from '@angular/http';
import { CustExtBrowserXhr } from './cust-ext-browser-xhr';
import { MovieDisplayModule } from './movie-display/movie-display.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppCommonModule,
    HttpModule,
    MovieDisplayModule
  ],
  providers: [
    { provide: BrowserXhr, useClass: CustExtBrowserXhr }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
