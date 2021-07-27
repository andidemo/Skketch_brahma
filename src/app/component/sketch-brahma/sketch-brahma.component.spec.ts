import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SketchBrahmaComponent } from './sketch-brahma.component';

describe('SketchBrahmaComponent', () => {
  let component: SketchBrahmaComponent;
  let fixture: ComponentFixture<SketchBrahmaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SketchBrahmaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SketchBrahmaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
