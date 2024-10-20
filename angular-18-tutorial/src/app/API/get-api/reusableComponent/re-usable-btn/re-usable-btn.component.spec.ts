import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReUsableBtnComponent } from './re-usable-btn.component';

describe('ReUsableBtnComponent', () => {
  let component: ReUsableBtnComponent;
  let fixture: ComponentFixture<ReUsableBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReUsableBtnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReUsableBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
