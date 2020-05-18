import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers : {name:string,description:string}[] = [];

  constructor(){
    this.servers.push({
      name:'First Server',
      description:'First Server description'
    });
  }
  addServer(serverData:{serverName:string,serverDescription:string}){
    this.servers.push({
      name : serverData.serverName,
      description : serverData.serverDescription
    })
  }

  changeName(){
    this.servers[0].name = 'New Server'+Math.random();
  }

  destroyComponent(){
    this.servers.splice(0,1)
  }
}
