import { Component, OnInit } from '@angular/core';
import { GameLogic } from '../../classes/game-logic';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent implements OnInit {
  constructor(private game: GameLogic) {}

  ngOnInit(): void {}

  async clickSquare(square: any): Promise<void> {
    if (this.game.gameStatus === 1) {
      const position = square.currentTarget.getAttribute('position');
      this.game.setSquare(position, this.game.currentPlayer);
      const letter = this.game.currentPlayer === 1 ? 'X' : 'O';
      square.currentTarget.innerHTML = letter;
      square.currentTarget.style.color = 'red';
      square.currentTarget.style.fontSize = '5rem';
    }

    this.game.changePlayer();

    if (this.game.gameStatus === 1) {
      const currentPlayer =
        'Current Turn 👉 Player ' +
        (this.game.currentPlayer === 1 ? "One: 'X'" : "Two: 'O'");
      const info = document.querySelector('.current-status');
      info!.innerHTML = currentPlayer;
    }
  }
}
