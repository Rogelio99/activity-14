import { environment } from "src/environments/environment";
import { Injectable} from "@angular/core";
const axios = require('axios');
const urlApi = environment.urlApi;

@Injectable({
  providedIn: "root"
})
export class UsersServices {
  urlUsers = urlApi + "users";

  constructor() {}

  async getUsers() {
    return await axios.get(this.urlUsers)
    .then((response: { data: any}) => response.data)
    .catch((error: any) => console.log(error));
  }
}
