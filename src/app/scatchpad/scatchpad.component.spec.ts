import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatchpadComponent } from './scatchpad.component';

describe('ScatchpadComponent', () => {
  let component: ScatchpadComponent;
  let fixture: ComponentFixture<ScatchpadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScatchpadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScatchpadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
