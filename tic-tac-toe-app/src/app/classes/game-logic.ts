import { Status } from './game-status';

export class GameLogic {
  gameBoard: Array<number> = [];
  currentPlayer!: number;
  gameStatus: Status;

  public constructor() {
    this.gameStatus = Status.Stop;
    this.gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  }

  gameStart(): void {
    this.gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.currentPlayer = this.randomPlayerStart();
    this.gameStatus = Status.Start;
  }

  randomPlayerStart(): number {
    return Math.floor(Math.random() * 2) + 1;
  }

  setSquare(position: number, value: number): void {
    this.gameBoard[position] = value;
  }

  changePlayer(): void {
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
  }
}
