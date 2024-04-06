import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastyPastriesComponent } from './tasty-pastries.component';

describe('TastyPastriesComponent', () => {
  let component: TastyPastriesComponent;
  let fixture: ComponentFixture<TastyPastriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TastyPastriesComponent]
    });
    fixture = TestBed.createComponent(TastyPastriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
