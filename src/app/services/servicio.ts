import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Servicio {

  private datos:any[] = [];

  constructor(private http: HttpClient){}

  getData(){
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/todos');
  }
  


  getMessageById(id: number){

    return this.datos.find(item => item.id === id);
  }


}
