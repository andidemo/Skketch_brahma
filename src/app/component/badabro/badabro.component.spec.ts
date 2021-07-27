import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BadabroComponent } from './badabro.component';

describe('BadabroComponent', () => {
  let component: BadabroComponent;
  let fixture: ComponentFixture<BadabroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BadabroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BadabroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
