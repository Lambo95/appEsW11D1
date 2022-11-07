import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../class/user';
import { Iuser } from '../interface/Iuser';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  // count = 0;
  user = new User();
  private urlApi: string = 'https://jsonplaceholder.typicode.com/users/';
  constructor(private http: HttpClient) {}

  getAllUser() {
    return this.http.get<any>(this.urlApi);
  }

  getUserById(id: number) {
    return this.http.get<any>(this.urlApi + id);
  }

  deleteUser(id: number) {
    return this.http.delete(this.urlApi + id);
  }

  // upVote() {
  //   this.user.votes = this.count++;
  // }
  // downvote() {
  //   this.user.votes = this.count--;
  // }
}
