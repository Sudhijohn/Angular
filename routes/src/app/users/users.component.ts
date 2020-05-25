import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers:[UsersService]
})
export class UsersComponent implements OnInit {
  navigationSubscription:Subscription;
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  constructor(private usersService : UsersService,private router:Router){}

  ngOnInit(){
    this.navigationSubscription = this.usersService.onNavigation.subscribe((id)=>{
      const index = this.users.find(
        (s,index) => {
          if( s.id === +id){
            this.router.navigate(['/users',this.users[index+1].id,this.users[index+1].name])
          }
        }
      );
      
    });
  }

}
