import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapsLayerComponent } from './maps-layer.component';

describe('MapsLayerComponent', () => {
  let component: MapsLayerComponent;
  let fixture: ComponentFixture<MapsLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapsLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapsLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
