import { Component, OnInit } from '@angular/core';
import { PostsServices } from 'src/app/services/postServices';

@Component({
  selector: 'app-pagination-posts',
  templateUrl: './pagination-posts.component.html',
  styleUrls: ['./pagination-posts.component.css']
})
export class PaginationPostsComponent implements OnInit {
  posts: any = [];
  actualPosts: any = [];
  totalPages: number = 0;
  page: number = 0;

  constructor(
    private postServices: PostsServices
  ) {}

  ngOnInit(): void {
    this.postServices.getPosts()
    .then(
      (posts: any[]) => {
        this.posts = posts;
        this.totalPages = Math.ceil(posts.length / 10);
        this.actualPosts = this.posts.slice(0, 10);
      }
    )
  }

  previousPage() {
    this.page--;
    this.actualPosts = this.posts.slice(this.page * 10, (this.page + 1) * 10);

  }

  nextPage() {
    this.page++;
    this.actualPosts = this.posts.slice(this.page * 10, (this.page + 1) * 10);
  }

  openDetail(id: number) {
    window.location.href = "/posts/"+id;
  }

  editTitle(id: number) {
    window.location.href = "/posts/"+id+"/editTitle";
  }

  async delete(id:number){
    if(window.confirm('Seguro que deseas eliminar este registro?')) {
      await this.postServices.deletePost(id)
      .then(
        async (response: any) => {
          this.posts = await this.postServices.getPosts();
        }
      );
    }
  }


}
