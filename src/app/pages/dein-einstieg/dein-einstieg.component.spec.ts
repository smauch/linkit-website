import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DeinEinstiegComponent } from './dein-einstieg.component';

describe('DeinEinstiegComponent', () => {
  let component: DeinEinstiegComponent;
  let fixture: ComponentFixture<DeinEinstiegComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DeinEinstiegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeinEinstiegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
