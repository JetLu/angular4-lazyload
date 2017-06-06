import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service'

import { User } from '../model/user'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userArr: User[];

  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.adminService.getUsers().then(
      users => {
        this.userArr = users;
      });
  }

}
