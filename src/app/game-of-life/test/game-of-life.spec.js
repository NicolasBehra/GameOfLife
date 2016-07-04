"use strict";
var game_of_life_1 = require('../game-of-life');
var board_1 = require('../board/board');
describe("Game of life", function () {
    it("should set neighbours for eatch cell (more than 2 neighbours and less than 9)", function () {
        var board = new board_1.Board(8, 9);
        var game = new game_of_life_1.GameOfLife(board);
        game.setNeighbours();
        var filteredCells = game.board.cells.filter(function (cell) {
            return (!(cell.neighbours.length > 2 && cell.neighbours.length < 9));
        });
        expect(filteredCells.length).toEqual(0);
    });
    it("should calculate the next cells state", function () {
        var board = new board_1.Board(8, 9);
        var game = new game_of_life_1.GameOfLife(board);
        var aliveCellsBefore = game.board.cells.filter(function (cell) {
            return (cell.state);
        });
        game.nextIteration();
        var aliveCellsAfter = game.board.cells.filter(function (cell) {
            return (cell.state);
        });
        expect(aliveCellsBefore.length === aliveCellsAfter.length).toBe(false);
    });
});
//# sourceMappingURL=game-of-life.spec.js.map