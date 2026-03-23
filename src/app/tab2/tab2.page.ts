import { Component,OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList , IonLabel,IonItem, IonCheckbox} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Servicio } from '../services/servicio';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonList, IonLabel, IonItem, IonCheckbox]
})
export class Tab2Page {

  datos : any[] = [];

  constructor(
    public servicio:Servicio,
    private router: Router, //Importar Router...
    private activatedRouter: ActivatedRoute,
  ) {
    this.servicio.getData()
    .subscribe(Response =>{ // Observable, Response contiene los datos cuando los recibe 
      this.datos = Response;
      
    })
  }

  RecogerItem(dato:any) 
    {
     console.log(dato);
     this.router.navigate(['tabs/tab3', dato.id]);
    }





}
