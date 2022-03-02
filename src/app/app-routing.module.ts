import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaginationPhotosComponent } from './photos/pagination-photos/pagination-photos.component';
import { DetailPostComponent } from './posts/detail-post/detail-post.component';
import { PaginationPostsComponent } from './posts/pagination-posts/pagination-posts.component';
import { PatchComponent } from './posts/patch/patch.component';
import { PaginationUsersComponent } from './users/pagination-users/pagination-users.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'posts',
    component: PaginationPostsComponent
  },
  {
    path: 'posts/:id',
    component: DetailPostComponent
  },
  {
    path: 'posts/:id/editTitle',
    component: PatchComponent
  },
  {
    path: 'users',
    component: PaginationUsersComponent
  },
  {
    path: 'photos',
    component: PaginationPhotosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
