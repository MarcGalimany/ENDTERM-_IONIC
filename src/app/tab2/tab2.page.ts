import { Component,OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList , IonLabel,IonItem, IonCheckbox} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import { Servicio } from '../services/servicio';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Autenticacion } from '../services/autenticacion.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent,IonList, IonLabel, IonItem, IonCheckbox]
})
export class Tab2Page {

  datos : any[] = [];
  usuarioEmail: string | null = null;

  constructor(
    public servicio:Servicio,
    private router: Router, //Importar Router...
    private activatedRouter: ActivatedRoute,
    private authService: Autenticacion,
  ) {

    this.servicio.getData()
    .subscribe(Response =>{ // Observable, Response contiene los datos cuando los recibe 
      this.datos = Response;
      
    })
  }

  RecogerItem(dato:any) 
    {
     console.log(dato);
     this.router.navigate(['/tab3', dato.id]);
    }
    
  ngOnInit() {
    this.authService.usuarioActual().subscribe(user => {
    this.usuarioEmail = user?.email ?? null;
      });
  }




}
