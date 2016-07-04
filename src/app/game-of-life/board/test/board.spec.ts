import { Cell } from '../../cell/cell'
import { Board } from '../board'

describe("A board", function() {

  it("should create instantiate a list of cells with the good length", function() {
    let board = new Board(2,3);
    expect(board.getSize()).toEqual(2*3);
  });

  it("should get at least 2 neighbours", function() {
    let board = new Board(4,8);
    let cell =  board.setCellNeighbours(board.cells[12], 12);
    expect(cell.neighbours.length).toBeGreaterThan(1);
  });

  it("should get 3 neighbours for a cell in boarder (first)", function() {
    let board = new Board(4,8);
    let cell =  board.setCellNeighbours(board.cells[0], 0);
    expect(cell.neighbours.length).toEqual(3);
  });

  it("should get 3 neighbours for a cell in boarder (last)", function() {
    let board = new Board(4,8);
    let lastCell = board.setCellNeighbours(board.cells[board.getSize()-1], board.getSize()-1);
    expect(lastCell.neighbours.length).toEqual(3);
  });
});
