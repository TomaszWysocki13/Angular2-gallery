import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartphonesComponent } from './smartphones.component';

describe('SmartphonesComponent', () => {
  let component: SmartphonesComponent;
  let fixture: ComponentFixture<SmartphonesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartphonesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartphonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
