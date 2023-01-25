import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ReferenzenComponent } from './referenzen.component';

describe('ReferenzenComponent', () => {
  let component: ReferenzenComponent;
  let fixture: ComponentFixture<ReferenzenComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ReferenzenComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReferenzenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
