import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllshowComponent } from './allshow.component';

describe('AllshowComponent', () => {
  let component: AllshowComponent;
  let fixture: ComponentFixture<AllshowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllshowComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
