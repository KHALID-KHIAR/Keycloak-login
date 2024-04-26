import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnprotectedComponent } from './unprotected.component';

describe('UnprotectedComponent', () => {
  let component: UnprotectedComponent;
  let fixture: ComponentFixture<UnprotectedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnprotectedComponent]
    });
    fixture = TestBed.createComponent(UnprotectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
