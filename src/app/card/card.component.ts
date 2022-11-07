import { Component, OnInit } from '@angular/core';
import { Iuser } from '../interface/Iuser';
import { UsersService } from '../service/users.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  userList: any[] = [];
  votes: number = 0;
  constructor(private userService: UsersService) {}

  ngOnInit(): void {
    this.userService.getAllUser().subscribe({
      next: (user) => (this.userList = user),
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }

  upVote() {
    this.votes++;
  }
  downVote() {
    this.votes--;
  }

  removeUser(id: number) {
    this.userService.deleteUser(id).subscribe();
    this.userList.splice(id, 1);
  }
}
