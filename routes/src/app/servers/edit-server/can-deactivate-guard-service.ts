import { Observable } from 'rxjs';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

export interface CanDeactivateComponent{
    canDeactivate :() => boolean | Observable<boolean> | Promise<boolean>;
}

export class canDeactivateGuard implements CanDeactivate<CanDeactivateComponent>{
    canDeactivate(component :CanDeactivateComponent, currentRoute: ActivatedRouteSnapshot,
        currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot ){
            return component.canDeactivate();
    }
}