import { environment } from "src/environments/environment";
import { Injectable} from "@angular/core";
const axios = require('axios');
const urlApi = environment.urlApi;

@Injectable({
  providedIn: "root"
})
export class PhotosServices {
  urlPhotos = urlApi + "photos";

  constructor() {}

  async getPhotos() {
    return await axios.get(this.urlPhotos)
    .then((response: { data: any}) => response.data)
    .catch((error: any) => console.log(error));
  }
}
