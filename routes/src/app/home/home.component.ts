import { Component, OnInit } from '@angular/core';
import { Routes, Router,ActivatedRoute } from '@angular/router';
import { AuthService } from '../authService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route:Router,private currentRoute: ActivatedRoute,private authService:AuthService) { }

  ngOnInit() {
  }

  loadServers(id:number) {
    //this.route.navigate(['./servers'],{relativeTo:this.currentRoute});
    this.route.navigate(['./servers',id,"edit"],{queryParams:{allowEdit:1},fragment:"loading"});
  }

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }

}
