import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { AppRoutingModule } from './router/routing.module';
import { HomeComponent } from './home/home.component';

import { InMemoryDataService } from './in-memory-data.service'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AdminService } from './admin.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
