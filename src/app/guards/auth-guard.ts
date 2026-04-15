import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Autenticacion } from '../services/autenticacion.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth: Autenticacion, private router: Router) {}

  canActivate() {
    return this.auth.usuarioActual().pipe(
      map(user => {
        if (user) {
          return true; 
        } else {
          this.router.navigate(['/tabs/tab1']); 
          return false;
        }
      })
    );
  }
}