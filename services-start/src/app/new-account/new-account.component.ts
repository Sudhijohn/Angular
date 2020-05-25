import { Component, EventEmitter, Output } from '@angular/core';
import { DebugingService } from '../debuging.service';
import { LoggingService } from '../logging.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers:[]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<{name: string, status: string}>(); 

  constructor(private loggingServie : LoggingService, private accountService:AccountService){
    this.accountService.statusUpdate.subscribe((status:String)=>{
      alert(`Status Updated as ${status}`);
    });
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });
    this.accountService.addAccount(accountName,accountStatus);
    const debugingService = new DebugingService();
    debugingService.debugStatus(accountStatus);
    //this.loggingServie.logStatus(accountStatus);
    //console.log('A server status changed, new status: ' + accountStatus);
  }
}
