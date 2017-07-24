import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MousesComponent } from './mouses.component';

describe('MousesComponent', () => {
  let component: MousesComponent;
  let fixture: ComponentFixture<MousesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MousesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MousesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
