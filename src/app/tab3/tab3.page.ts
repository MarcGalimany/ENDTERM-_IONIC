import { Component,OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent } from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { ActivatedRoute } from '@angular/router';
import { Servicio } from '../services/servicio';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent],})
export class Tab3Page {

  Tarea : any

  constructor(
    private servicio:Servicio,
    private route:ActivatedRoute) {}

ngOnInit(){
  const id = Number (this.route.snapshot.paramMap.get('id'));
  console.log('El ID es', id);
  this.servicio.getMessageById(id).subscribe(data => {
  this.Tarea = data;
});
}
}
