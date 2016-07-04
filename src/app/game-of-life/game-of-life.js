"use strict";
var cell_1 = require('./cell/cell');
var GameOfLife = (function () {
    function GameOfLife(board) {
        this.board = board;
    }
    GameOfLife.prototype.setNeighbours = function () {
        var _this = this;
        var calculatedCell = this.board.cells.map(function (cell, index) {
            return _this.board.setCellNeighbours(cell, index);
        });
        this.board.setCells(calculatedCell);
    };
    GameOfLife.prototype.nextIteration = function () {
        this.setNeighbours();
        var nextCellsState = this.board.cells.map(function (cell) { return new cell_1.Cell(cell.nextState()); });
        this.board.setCells(nextCellsState);
    };
    return GameOfLife;
}());
exports.GameOfLife = GameOfLife;
//# sourceMappingURL=game-of-life.js.map