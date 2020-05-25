import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

import { ServersService } from '../servers.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: {id: number, name: string, status: string};

  constructor(private serversService: ServersService, 
              private currentRoute: ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.currentRoute.data.subscribe((data:Data)=>{
      this.server = data['server'];
    });
    //this.server = this.serversService.getServer(1);
    // let id = +this.currentRoute.snapshot.params['id'];
    // this.server = this.serversService.getServer(id);

    // this.currentRoute.params.subscribe((params:Params)=>{
    //   id = +params['id'];
    //   this.server = this.serversService.getServer(id);
    // });
  }

  loadEdit(){
    this.router.navigate(['edit'],{relativeTo:this.currentRoute,queryParamsHandling:'preserve'});
  }

}
