import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsServices } from 'src/app/services/postServices';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detail-post',
  templateUrl: './detail-post.component.html',
  styleUrls: ['./detail-post.component.css']
})
export class DetailPostComponent implements OnInit {
  post: any = {
    id: 0,
    userId: 0,
    title: "",
    body: ""
  };
  id: any = 0;
  error: string = "";
  formCheckout = this.formBuilder.group({
    id: 0,
    userId: 0,
    title: "",
    body: ""
  });

  constructor(
    private route:ActivatedRoute,
    private postService:PostsServices,
    private formBuilder: FormBuilder
  ) { }

  async ngOnInit(): Promise<void> {
    this.route.params.subscribe(async (paramsMap:any) => {
      this.id = paramsMap.id;
      if(this.id != "0"){
        await this.getDetailPost();
      }
    });
  }

  async getDetailPost() {
    this.post = await this.postService.getPost(this.id)
    this.formCheckout.setValue(this.post);
  }

  async onSubmit(): Promise<void> {
    // Process checkout data here
    this.error = "";
    const values = this.formCheckout.value;
    for (const key in values) {
      if(values[key] == "" && key != "status" && key != "id") {
        this.error = "Todos los campos son obligatorios"+key;
        return;
      }
    }
    if(this.id != "0"){
      await this.postService.updatePost(this.formCheckout.value);
    }else{
      await this.postService.createPost(this.formCheckout.value);
    }
    this.formCheckout.reset();
    window.location.href = "/posts";
  }

}
