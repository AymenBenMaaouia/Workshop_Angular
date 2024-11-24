import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendenceDetailsComponent } from './rendence-details.component';

describe('RendenceDetailsComponent', () => {
  let component: RendenceDetailsComponent;
  let fixture: ComponentFixture<RendenceDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RendenceDetailsComponent]
    });
    fixture = TestBed.createComponent(RendenceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
