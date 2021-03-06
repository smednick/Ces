import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MapLayerProviderOptions } from 'angular-cesium';
import { AppSettingsService } from '../app-settings-service.service';
import { AcMapLayerProviderComponent } from 'angular-cesium';

@Component({
  selector : 'maps-layer',
  templateUrl : 'maps-layer.component.html'
})

export class MapsLayerComponent implements AfterViewInit {
  
  @ViewChild('blackmarble') blackMarbleMap: AcMapLayerProviderComponent;
  
  MapLayerProviderOptions = MapLayerProviderOptions;
  Cesium = Cesium;
  
  constructor(public appSettingsService: AppSettingsService) {
  }
  
  ngAfterViewInit(): void {
    
    if (this.blackMarbleMap && this.blackMarbleMap.imageryLayer) {
      // another way to set alpha (or any imageLayers settings)
      this.blackMarbleMap.imageryLayer.alpha = 0.5;
    }
  }
}
