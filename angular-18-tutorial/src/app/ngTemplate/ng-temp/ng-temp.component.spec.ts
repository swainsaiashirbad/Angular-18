import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgTempComponent } from './ng-temp.component';

describe('NgTempComponent', () => {
  let component: NgTempComponent;
  let fixture: ComponentFixture<NgTempComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgTempComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgTempComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
