import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationPostsComponent } from './pagination-posts.component';

describe('PaginationPostsComponent', () => {
  let component: PaginationPostsComponent;
  let fixture: ComponentFixture<PaginationPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaginationPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginationPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
