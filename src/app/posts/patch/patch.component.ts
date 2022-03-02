import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PostsServices } from 'src/app/services/postServices';

@Component({
  selector: 'app-patch',
  templateUrl: './patch.component.html',
  styleUrls: ['./patch.component.css']
})
export class PatchComponent implements OnInit {
  post: any = {
    title: ""
  };
  id: any = 0;
  error: string = "";
  formCheckout = this.formBuilder.group({
    title: ""
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
      }else{
        this.error = "No envio el id";
      }
    });
  }

  async getDetailPost() {
    this.post = await this.postService.getPost(this.id)
    this.formCheckout.setValue({
      title: this.post.title
    });
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
    await this.postService.updateTitle(this.id, this.formCheckout.value["title"]);

    this.formCheckout.reset();
    window.location.href = "/posts";
  }

}

