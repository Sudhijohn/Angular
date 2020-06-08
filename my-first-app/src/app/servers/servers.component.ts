import { Component, OnInit } from '@angular/core';
import { ArrayType } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer : boolean = false;
  serverStatus : string = 'No servers created!';
  serverName : string;
  serverCreated : boolean = false;
  servers :string[] = ['Test Server','Test Server 2'];

  constructor() {

    setTimeout(()=>{
      this.allowNewServer = true;
    },5000);

   }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverStatus = `Server created! Name is ${this.serverName}`;
    this.servers.push(this.serverName);
    this.serverCreated = true;
    
  }

  onUpdateServer(event){
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
