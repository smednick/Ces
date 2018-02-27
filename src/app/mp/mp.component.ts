import { Component, ViewChild } from '@angular/core';
import { ViewerConfiguration, AcMapLayerProviderComponent, CesiumService } from 'angular-cesium';
import { AppSettingsService } from '../app-settings-service.service';
import { MapLayerProviderOptions } from 'angular-cesium';
//import { TracksLayerComponent } from 'tracks-layer';
import { SceneMode, AcRectangleDescComponent  } from 'angular-cesium';
import { MapLayersService } from 'angular-cesium/src/angular-cesium/services/map-layers/map-layers.service';
import { ViewerFactory } from 'angular-cesium/src/angular-cesium/services/viewer-factory/viewer-factory.service';

@Component({
	selector : 'demo-map',
	templateUrl : './mp.component.html',
	providers : [ViewerConfiguration],
	styleUrls : ['./mp.component.css']
})
export class MpComponent {
	// @ViewChild('layer') tracksLayer: TracksLayerComponent;
	arcGisMapServerProvider = MapLayerProviderOptions.ArcGisMapServer;
	sceneMode = SceneMode.SCENE3D;
	constructor(private viewerConf: ViewerConfiguration,
							private appSettingsService: AppSettingsService){//} private MapLayersService: MapLayersService) {
		viewerConf.viewerOptions = {
			selectionIndicator : false,
			timeline : false,
			infoBox : false,
			fullscreenButton : false,
			baseLayerPicker : false,
			animation : false,
			homeButton : false,
			geocoder : false,
			navigationHelpButton : false,
			navigationInstructionsInitiallyVisible : false,
		};
		
		viewerConf.viewerModifier = (viewer: any) => {
			viewer.screenSpaceEventHandler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
			viewer.bottomContainer.remove();

			//this.MapLayersService.drawAllLayers();
		};
		this.appSettingsService.keyboardControl = true;
		this.appSettingsService.showTracksLayer = true;
	}
	
	removeAll() {
		// this.tracksLayer.removeAll();
	}
}
