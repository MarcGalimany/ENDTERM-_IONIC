import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { GameService } from '../game/game.service';
@Component({
  selector: 'app-pagina-juego',
  templateUrl: './pagina-juego.page.html',
  styleUrls: ['./pagina-juego.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PaginaJuegoPage implements OnInit {

  constructor(private gameService:GameService) { }

  ngOnInit() {
  }

    ngAfterViewInit() {
    this.gameService.initgame();
  }

  ngOnDestroy() {
    this.gameService.destroygame();
  }



}
