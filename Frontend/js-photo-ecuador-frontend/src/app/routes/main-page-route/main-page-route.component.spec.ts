import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageRouteComponent } from './main-page-route.component';

describe('MainPageRouteComponent', () => {
  let component: MainPageRouteComponent;
  let fixture: ComponentFixture<MainPageRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
