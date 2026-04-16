import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem,IonLabel, IonList } from '@ionic/angular/standalone';
import { CRUDFirebase } from '../services/crud-firebase';

@Component({
  selector: 'app-datos-firebase',
  templateUrl: './datos-firebase.page.html',
  styleUrls: ['./datos-firebase.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem,IonLabel,IonList]
})
export class DatosFirebasePage implements OnInit {

  items: any[] = [];

  constructor(private crudFirebase:CRUDFirebase ) { }

    ngOnInit() {
    this.crudFirebase.read().subscribe(res => {
      this.items = res;
    });
  }

}
