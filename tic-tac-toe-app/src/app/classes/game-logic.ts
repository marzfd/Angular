import { Status } from './game-status';

export class GameLogic {
  gameBoard: Array<number> = [];
  currentPlayer!: number;
  gameStatus: Status;

  winPlayerOne: Array<Array<number>> = [
    [1, 1, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 1, 1, 1],
    [1, 0, 0, 1, 0, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 0, 1, 0, 0, 1],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 0, 1, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0],
  ];

  winPlayerTwo: Array<Array<number>> = [
    [2, 2, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 2, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 2, 2, 2],
    [2, 0, 0, 2, 0, 0, 2, 0, 0],
    [0, 2, 0, 0, 2, 0, 0, 2, 0],
    [0, 0, 2, 0, 0, 2, 0, 0, 2],
    [2, 0, 0, 0, 2, 0, 0, 0, 2],
    [0, 2, 0, 0, 0, 2, 0, 2, 0],
    [0, 0, 2, 0, 2, 0, 2, 0, 0],
  ];

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

  setSquare(position: number, square: number): void {
    this.gameBoard[position] = square;
  }

  changePlayer(): void {
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
  }

  equals(a: Array<any>, b: Array<any>): boolean {
    return (
      Array.isArray(a) &&
      Array.isArray(b) &&
      a.length === b.length &&
      a.every((square, index) => square === b[index])
    );
  }

  async checkWinner(): Promise<boolean> {
    let winner = false;

    const checkWinPlayer =
      this.currentPlayer === 1 ? this.winPlayerOne : this.winPlayerTwo;

    const current: Array<any> = [];

    this.gameBoard.forEach((square, index) => {
      if (square !== this.currentPlayer) {
        current[index] = 0;
      } else {
        current[index] = square;
      }
    });

    console.log(this.gameBoard);

    checkWinPlayer.forEach((checkSquare, checkIndex) => {
      if (this.equals(checkSquare, current)) {
        winner = true;
      }
    });

    if (winner) {
      this.gameEnd();
      return true;
    } else {
      return false;
    }
  }

  async checkNoWinner(): Promise<boolean> {
    let noWinner = true;

    if (this.gameBoard.includes(0)) {
      noWinner = false;
    }

    if (noWinner) {
      this.gameEnd();
      return true;
    } else {
      return false;
    }
  }

  gameEnd(): void {
    this.gameStatus = Status.Stop;
  }
}
