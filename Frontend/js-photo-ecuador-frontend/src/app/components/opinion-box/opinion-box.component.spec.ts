import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionBoxComponent } from './opinion-box.component';

describe('OpinionBoxComponent', () => {
  let component: OpinionBoxComponent;
  let fixture: ComponentFixture<OpinionBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinionBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
