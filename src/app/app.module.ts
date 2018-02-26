import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngularCesiumModule } from 'angular-cesium';
import { MpComponent } from './mp/mp.component';
import {Cesium} from 'cesium';
import { MapsLayerComponent } from './maps-layer/maps-layer.component';
import { ArcLayerComponent } from './arc-layer/arc-layer.component';

@NgModule({
  declarations: [
    AppComponent,
    MpComponent,
    MapsLayerComponent,
    ArcLayerComponent
  ],
  imports: [
    BrowserModule,
    AngularCesiumModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
