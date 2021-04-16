import { UserService } from './../user.service';
import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { CadUsers } from 'src/app/core/model';

@Injectable({ providedIn: 'root'})

export class UserlistResolver implements Resolve<Observable<CadUsers[]>> {
    constructor(private service: UserService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<CadUsers[]> {
   const username = route.params.username
    return this.service.listUser();
  }

}

