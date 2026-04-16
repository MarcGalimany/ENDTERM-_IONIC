import { Injectable } from '@angular/core';
import { Firestore, collection,addDoc,collectionData,doc,updateDoc,deleteDoc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CRUDFirebase {

constructor(private firestore:Firestore){}

  
  create(data: any) {
    const ref = collection(this.firestore, 'Tareas');
    return addDoc(ref, data);
  }

  read(): Observable<any[]> {
    const ref = collection(this.firestore, 'Tareas');
  return collectionData(ref, { idField: 'id' });
  }


  update(id: string, data: any) {
    const ref = doc(this.firestore, `Tareas/${id}`);
    return updateDoc(ref, data);
  }

  delete(id: string) {
    const ref = doc(this.firestore, `Tareas/${id}`);
    return deleteDoc(ref);
  }

}
