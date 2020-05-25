import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { User } from './user.model';
import { UsersService } from './users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UsersService]
})
export class UsersComponent implements OnInit, AfterViewInit {
  users: User [];
  @ViewChild('user') user: ElementRef;
  @ViewChild('input') input: ElementRef;

  constructor(private userService:UsersService) { }

  ngOnInit(): void {
    this.users = this.userService.getUsers();
    console.log(this.user);
  }

  ngAfterViewInit(){
    console.log(this.user);
    console.log(this.input.nativeElement.value);
  }

}
