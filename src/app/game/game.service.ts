import { Injectable } from '@angular/core';
import { gameconf } from './game.conf';
import * as Phaser from 'phaser';

@Injectable({
  providedIn: 'root',
})
export class GameService {
    private game!: Phaser.Game;


   initgame(){
    if (!this.game){
        this.game = new Phaser.Game(gameconf);
    }
   }
   destroygame(){
    if(this.game){
        this.game.destroy(true,true);
    }

   }
}
