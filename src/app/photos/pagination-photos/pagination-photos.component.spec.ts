import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationPhotosComponent } from './pagination-photos.component';

describe('PaginationPhotosComponent', () => {
  let component: PaginationPhotosComponent;
  let fixture: ComponentFixture<PaginationPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
