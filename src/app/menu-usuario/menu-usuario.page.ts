import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton} from '@ionic/angular/standalone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-usuario',
  templateUrl: './menu-usuario.page.html',
  styleUrls: ['./menu-usuario.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, IonButton,]
})
export class MenuUsuarioPage implements OnInit {

  constructor(private router: Router,) { }



  ngOnInit() {
  }

  ir_Tab2() {
  this.router.navigateByUrl('/tab2', { replaceUrl: true });
  }

  ir_Tab3() {
  this.router.navigateByUrl('/tab2', { replaceUrl: true });
  }
}
