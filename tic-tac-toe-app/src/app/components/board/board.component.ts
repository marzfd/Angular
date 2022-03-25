import { Component, OnInit } from '@angular/core';
import { GameLogic } from '../../classes/game-logic';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css'],
  providers: [GameLogic],
})
export class BoardComponent implements OnInit {
  constructor(public game: GameLogic) {}

  ngOnInit(): void {}

  startGame(): void {
    this.game.gameStart();
    const currentPlayer =
      'Current Turn 👉 Player ' +
      (this.game.currentPlayer === 1 ? "One: 'X'" : "Two: 'O'");
    const info = document.querySelector('.current-status');
    info!.innerHTML = currentPlayer;
  }

  endGame(): void {
    this.game.gameStatus = 0;
    const infoEl: HTMLElement | null =
      document.querySelector('.current-status');
    infoEl!.innerHTML = 'Click to start a new game';
  }
}
