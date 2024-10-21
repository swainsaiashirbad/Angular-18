import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TEmplateFormComponent } from './template-form.component';

describe('TEmplateFormComponent', () => {
  let component: TEmplateFormComponent;
  let fixture: ComponentFixture<TEmplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TEmplateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TEmplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
