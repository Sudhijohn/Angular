import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ServersService } from '../servers.service';

interface Server{
    id:number,
    name:string,
    status:string
}

@Injectable()

export class ResolverService implements Resolve<Server> {
    constructor(private serverService:ServersService){}
    //resolve(currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot): Server | Observable<Server> | Promise<Server> { 
    resolve(currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot):any {
        return this.serverService.getServer(+currentRoute.params['id']);
    }

}