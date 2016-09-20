//3rd party globals;
import 'hammerjs';
import '@angular2-material/core/overlay/overlay.css';

// angualr 2 depend
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing,
         appRoutingProviders }  from './app.routing';

// angular 2 material
import { MdButtonModule } from '@angular2-material/button';
import { MdCardModule } from '@angular2-material/card';
import { MdToolbarModule } from '@angular2-material/toolbar';
import { MdSidenavModule } from '@angular2-material/sidenav';
import { MdIconModule } from '@angular2-material/icon';
// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,

    MdButtonModule.forRoot(), 
    MdCardModule.forRoot(),
    MdToolbarModule.forRoot(),
    MdSidenavModule.forRoot(),
    MdIconModule.forRoot()
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
