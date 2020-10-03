import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumPostComponent } from './album-post.component';

describe('AlbumPostComponent', () => {
  let component: AlbumPostComponent;
  let fixture: ComponentFixture<AlbumPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlbumPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlbumPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
