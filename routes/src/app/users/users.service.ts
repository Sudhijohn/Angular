import { OnInit , Output, EventEmitter } from '@angular/core';

export class UsersService implements OnInit{
    @Output() onNavigation = new EventEmitter<any>();
    ngOnInit(){
        
    }
}