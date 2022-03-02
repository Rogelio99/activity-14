import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DetailPostComponent } from './posts/detail-post/detail-post.component';
import { PaginationPostsComponent } from './posts/pagination-posts/pagination-posts.component';
import { PaginationPhotosComponent } from './photos/pagination-photos/pagination-photos.component';
import { PaginationUsersComponent } from './users/pagination-users/pagination-users.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PatchComponent } from './posts/patch/patch.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailPostComponent,
    PaginationPostsComponent,
    PaginationPhotosComponent,
    PaginationUsersComponent,
    HomeComponent,
    NavBarComponent,
    PatchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
