import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem,IonList,IonCard,
        IonCardHeader,IonCardTitle ,IonCardSubtitle,IonCardContent,IonCheckbox,IonButton, IonInput} from '@ionic/angular/standalone';
import { CRUDFirebase } from '../services/crud-firebase';
import { Compartir } from '../services/compartir';

@Component({
  selector: 'app-datos-firebase',
  templateUrl: './datos-firebase.page.html',
  styleUrls: ['./datos-firebase.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,IonItem,IonList,
            IonCard,IonCardHeader,IonCardTitle, IonCardSubtitle,IonCardContent,IonCheckbox,IonButton,IonInput ]
})
export class DatosFirebasePage implements OnInit {

  items: any[] = [];
  Tarea ={
    TituloTarea:'',
    TipoTarea:'',
    descripcion:'',
    HorasEnRealizarTarea:'',
    fechaCreacion:'',
    TareaRealizada: false,
  }



  constructor(private crudFirebase:CRUDFirebase,
              private compartir:Compartir
  ) { }

    ngOnInit() {
    this.crudFirebase.read().subscribe(res => {
      this.items = res;
    });
  }
  ActualizarTareaRealizada(item:any,$event:any){
    item.TareaRealizada = $event.detail.checked
    this.crudFirebase.update(item.id,{TareaRealizada:item.TareaRealizada})
  }
  BorrarTarea(item:any){
    console.log(item.id)
    this.crudFirebase.delete(item.id)
  }

  NuevaTarea(){
    this.crudFirebase.create(this.Tarea)
  }

  CompartirTexto(titulo:string){

    this.compartir.CompartirTexto(titulo);

  }
}
