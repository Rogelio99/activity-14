import { environment } from "src/environments/environment";
import { Injectable} from "@angular/core";
const axios = require('axios');
const urlApi = environment.urlApi;

@Injectable({
  providedIn: "root"
})
export class PostsServices {
  urlPosts = urlApi + "posts";

  constructor() {}

  async getPosts() {
    return await axios.get(this.urlPosts)
    .then((response: { data: any}) => response.data)
    .catch((error: any) => console.log(error));
  }

  async getPost(id: number) {
    return await axios.get(this.urlPosts + "/" + id)
    .then((response: { data: any}) => response.data)
    .catch((error: any) => console.log(error));
  }

  async createPost(post: any) {
    return await axios.post(this.urlPosts, post)
    .then((response: { data: any}) => response.data)
    .catch((error: any) => console.log(error));
  }

  async updatePost(post: any) {
    return await axios.put(this.urlPosts + "/" + post.id, post)
    .then((response: { data: any}) => response.data)
    .catch((error: any) => console.log(error));
  }

  async updateTitle(id: number, title: string) {
    return await axios.patch(this.urlPosts + "/" + id, {title: title})
    .then((response: { data: any}) => response.data)
    .catch((error: any) => console.log(error));
  }

  async deletePost(id: number) {
    return await axios.delete(this.urlPosts + "/" + id)
    .then((response: { data: any}) => response.data)
    .catch((error: any) => console.log(error));
  }
}
