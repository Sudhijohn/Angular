import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute , Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CanDeactivateComponent } from './can-deactivate-guard-service';

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanDeactivateComponent {
  server: {id: number, name: string, status: string};
  serverName:string = '';
  serverStatus:string = '';
  allowedEdit:boolean = false;
  changesSaved : boolean  = false;

  constructor(private serversService: ServersService, private currentRoute : ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.server = this.serversService.getServer(1);
    let id = +this.currentRoute.snapshot.params['id'];
    this.server = this.serversService.getServer(id);
    this.currentRoute.params.subscribe((params:Params)=>{
      id = +params['id'];
      this.server = this.serversService.getServer(id);
      this.serverName = this.server.name;
      
      this.serverStatus = this.server.status;
    })
    this.currentRoute.queryParams.subscribe((queryParams:Params)=>{
      this.allowedEdit = queryParams['allowEdit']==='1'?true:false;
    });
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }

  onUpdateServer() {
    this.serversService.updateServer(this.server.id, {name: this.serverName, status: this.serverStatus});
    this.changesSaved = true;
    this.router.navigate(['../'],{relativeTo:this.currentRoute});
  }

  canDeactivate():boolean | Observable<boolean> | Promise<boolean> {
    if(!this.allowedEdit){
      return true;
    }
    if(this.serverName !== this.server.name || this.serverStatus !== this.server.status && !this.changesSaved){
      return confirm(`Do you want to navigate away from this page?`);
    }else {
      return true;
    }
  }

}
