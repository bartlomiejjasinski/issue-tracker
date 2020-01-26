import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { APP_CONFIG } from './common/config.service';
import { AppConfig } from './app.config';
import { IssuesModule } from './issues/issues.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IssuesModule
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: AppConfig
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
