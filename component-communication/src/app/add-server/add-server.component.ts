import { Component, OnInit, EventEmitter, Output, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.css'],
  encapsulation:ViewEncapsulation.Emulated
})
export class AddServerComponent implements OnInit {
  @Output() onaddServer = new EventEmitter <{serverName : string,serverDescription:string}>();
  @ViewChild('serverNameInput',{static:true})serverNameInput: ElementRef;  
  label_add_server: string = 'Add Server :';
  serverName: string = '';
  serverDescription : string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addServer (nameInput:HTMLInputElement) {
    console.log(`Reference to the local templete.`,nameInput);
    this.onaddServer.emit({
      serverName:this.serverName,
      serverDescription:this.serverDescription
    })
  }

  addServer2 () {
    this.onaddServer.emit({
      serverName:this.serverNameInput.nativeElement.value,
      serverDescription:this.serverDescription
    })
  }

}
