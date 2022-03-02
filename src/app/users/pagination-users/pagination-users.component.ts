import { Component, OnInit } from '@angular/core';
import { UsersServices } from 'src/app/services/usersServices';

@Component({
  selector: 'app-pagination-users',
  templateUrl: './pagination-users.component.html',
  styleUrls: ['./pagination-users.component.css']
})
export class PaginationUsersComponent implements OnInit {
  users: any = [];
  actualUsers: any = [];
  totalPages: number = 0;
  page: number = 0;
  constructor(private usersService: UsersServices) { }

  ngOnInit(): void {
    this.usersService.getUsers()
      .then(
        (users: any[]) => {
          this.users = users;
          this.totalPages = Math.ceil(users.length / 10);
          this.actualUsers = this.users.slice(0, 10);
        }
      )
  }

  previousPage() {
    this.page--;
    this.actualUsers = this.users.slice(this.page * 10, (this.page + 1) * 10);

  }

  nextPage() {
    this.page++;
    this.actualUsers = this.users.slice(this.page * 10, (this.page + 1) * 10);
  }

  concatData(data: any): any{
    console.log(data);
    let address = "";
    if(data){
      for(const key in data){
        if(data[key] && key != "geo"){
          address += data[key] + ", ";
        }
      }
    }
    return address;
  }
}
