import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: number, name: string};
  @Output() triggerNavigation = new EventEmitter<number>();

  constructor(private currentRoute: ActivatedRoute, private userService:UsersService) { }

  ngOnInit() {
    console.log(this.currentRoute.snapshot.params['id'])
    this.user = {
     id: this.currentRoute.snapshot.params['id'],
     name:this.currentRoute.snapshot.params['name'],
    };

    this.currentRoute.params.subscribe((params:Params)=>{
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
    
  }

  loadNext(){
    this.userService.onNavigation.emit(this.user.id);
  }

}
