import { Injectable } from '@angular/core';
import { Share } from '@capacitor/share';

@Injectable({
  providedIn: 'root',
})
export class Compartir {
  
  async CompartirTexto(texto: string) {
    try {
      await Share.share({
        title: 'Compartir',
        text: texto,  
        
      });
    } catch (error) {
      console.error('Error al compartir:', error);
    }
  }
}
