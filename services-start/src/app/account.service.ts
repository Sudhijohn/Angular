import { LoggingService } from './logging.service';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()


export class AccountService{
    accounts = [
        {
            name: 'Master Account',
            status: 'active'
        },
        {
            name: 'Testaccount',
            status: 'inactive'
        },
        {
            name: 'Hidden Account',
            status: 'unknown'
        }
    ];

    statusUpdate = new EventEmitter<string>();

    constructor(private logginService:LoggingService){}

    addAccount(name:string,status:string){
        this.accounts.push({
            name:name,
            status:status
        });
        this.logginService.logStatus(status);
    }

    updateAccount(id:number,status:string){
        this.accounts[id].status = status;
        this.logginService.logStatus(status);
        this.statusUpdate.emit(status);
    }
}