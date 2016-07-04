import { Cell } from './cell/cell'
import { Board } from './board/board'

export class GameOfLife {
	board: Board;

	constructor(board){
		this.board = board
	}

	setNeighbours() {
		const calculatedCell = this.board.cells.map((cell, index)=>{
			return this.board.setCellNeighbours(cell,index);
		});
		this.board.setCells(calculatedCell);
	}
	
	nextIteration() {
		this.setNeighbours();
		let nextCellsState = this.board.cells.map((cell) => new Cell(cell.nextState()));
		this.board.setCells(nextCellsState);
	}
}


