import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,authState } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Autenticacion {
  
  constructor(private auth:Auth){}


    registro(email: string, password: string) {
      return createUserWithEmailAndPassword(this.auth, email, password);
    }

    login(email: string, password: string) {
      return signInWithEmailAndPassword(this.auth, email, password);
    }

    usuarioActual(): Observable<any> {
    return authState(this.auth);
  }

}
