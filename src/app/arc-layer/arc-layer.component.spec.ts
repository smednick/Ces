import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArcLayerComponent } from './arc-layer.component';

describe('ArcLayerComponent', () => {
  let component: ArcLayerComponent;
  let fixture: ComponentFixture<ArcLayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArcLayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArcLayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
