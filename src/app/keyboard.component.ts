import { Component, OnDestroy, OnInit } from '@angular/core';
'angular-cesium';
import { KeyboardControlService } from 'angular-cesium';

// '../../node_modules/angular-cesium/src/angular-cesium/services/keyboard-control/keyboard-control.service';
import { KeyboardAction } from '../../node_modules/angular-cesium/src/angular-cesium/models/ac-keyboard-action.enum';

@Component({
  selector: 'keyboard-control-layer',
  template: '',
})
export class KeyBoardComponent implements OnInit, OnDestroy {
  constructor(private keyboardControlService: KeyboardControlService) {

  }

  ngOnInit() {
    this.keyboardControlService.setKeyboardControls({
      W: { action: KeyboardAction.CAMERA_FORWARD },
      S: { action: KeyboardAction.CAMERA_BACKWARD },
      D: { action: KeyboardAction.CAMERA_RIGHT },
      A: { action: KeyboardAction.CAMERA_LEFT },
    }, (keyEvent: KeyboardEvent) => {
      if (keyEvent.code === 'KeyW' || keyEvent.code === 'ArrowUp') {
        return 'W';
      } else if (keyEvent.code === 'KeyD' || keyEvent.code === 'ArrowRight') {
        return 'D';
      } else if (keyEvent.code === 'KeyA' || keyEvent.code === 'ArrowLeft') {
        return 'A';
      } else if (keyEvent.code === 'KeyS' || keyEvent.code === 'ArrowDown') {
        return 'S';
      } else {
        return String.fromCharCode(keyEvent.keyCode);
      }
    });
  }

  ngOnDestroy() {
    this.keyboardControlService.removeKeyboardControls();
  }
}