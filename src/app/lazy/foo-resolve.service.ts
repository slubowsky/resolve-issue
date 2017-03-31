import { Injectable } from '@angular/core';
import {
    Router, Resolve,
    ActivatedRouteSnapshot
} from '@angular/router';

@Injectable()
export class FooResolve implements Resolve<number> {
    constructor(private router: Router) { }
    resolve(route: ActivatedRouteSnapshot): Promise<number> {
        const id = route.params['id'];

        console.log('FooResolve', id);

        return Promise.resolve(id);
    }
}
