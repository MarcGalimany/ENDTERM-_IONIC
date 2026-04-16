import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonInput, IonLabel,IonButton } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Autenticacion } from '../services/autenticacion.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [FormsModule, IonHeader, IonToolbar, IonTitle, IonContent,
     IonItem, IonInput, IonLabel,IonButton],
})
export class Tab1Page {

  email = '';
  password = '';
  usuarioEmail: string | null = null;

  constructor(
    private authService: Autenticacion,
    private router: Router,
  ) {}
    ngOnInit() {
      this.authService.usuarioActual().subscribe(user => {
      this.usuarioEmail = user?.email ?? null;
        });
    }

    async registro() {
    try {
      const user = await this.authService.registro(this.email, this.password);
      console.log('Usuario registrado:', user);
      

    } catch (error) {
      console.error('Error al registrar:', error);
    }
    }

    async login() {
    try {
      const user = await this.authService.login(this.email, this.password);
      console.log('Login OK', user);
      this.usuarioEmail =  this.email ;
      this.router.navigate(['menu-usuario']);

    } catch (error) {
      this.usuarioEmail =  this.email + " no esta registrado";
      console.error('Error al iniciar sesión:', error);
    }
    }
    async loginGOOGLE() {
    try {
      await this.authService.loginConGOOGLE();
      this.router.navigate(['menu-usuario']);
      //this.router.navigate(['tab2']);
    } 
    catch (error) {
      this.usuarioEmail =  this.email + " no esta registrado";
      console.error('Error al iniciar sesión:', error);
    }
    }

    async logOut() {
      await this.authService.logout();
      this.router.navigate(['/tabs/tab1'], { replaceUrl: true });
    }
}
