import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RocketComponent } from './rocket/rocket.component';
import { AddRocketComponent } from './add-rocket/add-rocket.component';
import { UpdateRocketComponent } from './update-rocket/update-rocket.component';

@NgModule({
  declarations: [
    AppComponent,
    RocketComponent,
    AddRocketComponent,
    UpdateRocketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
