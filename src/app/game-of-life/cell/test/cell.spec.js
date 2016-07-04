"use strict";
var cell_1 = require('../cell');
describe("Cell calculate next state", function () {
    var cell;
    it("should return the number of alive neighbors (1)", function () {
        cell = new cell_1.Cell(true, [new cell_1.Cell(false), new cell_1.Cell(true)]);
        expect(cell.numberOfAliveNeighbours()).toEqual(1);
        // expect(player).toBePlaying(song);
    });
    it("should return the number of alive neighbors (2)", function () {
        cell = new cell_1.Cell(true, [new cell_1.Cell(true), new cell_1.Cell(true)]);
        expect(cell.numberOfAliveNeighbours()).toEqual(2);
    });
    it("next state should be alive if current state is alive and less than 2 alive neighbours", function () {
        cell = new cell_1.Cell(true, [new cell_1.Cell(true)]);
        expect(cell.nextState()).toEqual(false);
    });
    it("next state should be alive if current state is alive and 3 alive neighbours", function () {
        cell = new cell_1.Cell(true, [new cell_1.Cell(true), new cell_1.Cell(true), new cell_1.Cell(true)]);
        expect(cell.nextState()).toEqual(true);
    });
    it("next state should be dead if current state is alive and 4 alive neighbours", function () {
        cell = new cell_1.Cell(true, [new cell_1.Cell(true), new cell_1.Cell(true), new cell_1.Cell(true), new cell_1.Cell(true)]);
        expect(cell.nextState()).toEqual(false);
    });
    it("next state should be alive if current state is dead and 3 alive neighbours", function () {
        cell = new cell_1.Cell(false, [new cell_1.Cell(true), new cell_1.Cell(true), new cell_1.Cell(true)]);
        expect(cell.nextState()).toEqual(true);
    });
    it("next state should be alive if current state is alive and 2 alive neighbours", function () {
        cell = new cell_1.Cell(true, [new cell_1.Cell(true), new cell_1.Cell(true)]);
        expect(cell.nextState()).toEqual(true);
    });
    it("next state should be dead if current state is dead and 1 alive neighbour", function () {
        cell = new cell_1.Cell(false, [new cell_1.Cell(true)]);
        expect(cell.nextState()).toEqual(false);
    });
});
//# sourceMappingURL=cell.spec.js.map