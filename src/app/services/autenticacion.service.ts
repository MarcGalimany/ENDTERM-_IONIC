import { Injectable } from '@angular/core';
import { Auth,createUserWithEmailAndPassword,signInWithEmailAndPassword,authState,GoogleAuthProvider, signInWithPopup, signInWithRedirect } from '@angular/fire/auth';
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

    loginConGOOGLE()
    {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(this.auth, provider);
    }

}
