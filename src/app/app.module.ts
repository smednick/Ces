import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AngularCesiumModule } from 'angular-cesium';
import { MpComponent } from './mp/mp.component';
import {Cesium} from 'cesium';
import { MapsLayerComponent } from './maps-layer/maps-layer.component';
import { ArcLayerComponent } from './arc-layer/arc-layer.component';
import { KeyBoardComponent } from './keyboard.component';
import { KeyboardControlService } from 'angular-cesium';

@NgModule({
  declarations: [
    AppComponent,
    MpComponent,
    MapsLayerComponent,
    ArcLayerComponent,
    KeyBoardComponent
  ],
  imports: [
    BrowserModule,
    AngularCesiumModule.forRoot()
  ],
  providers: [KeyboardControlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
