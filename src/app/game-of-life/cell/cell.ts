
export class Cell {
	state: boolean;
	neighbours: Cell[];

	constructor(state, neighbours?){
		this.state = state;
		this.neighbours = neighbours;
	}

	numberOfAliveNeighbours() {
		var neighboursAlive = this.neighbours.filter((neighbour)=>{
			return neighbour.state;
		});

		if (this.neighbours.length > 1)
			return neighboursAlive.length;

		return 1;
	}

	nextState() {
		if(this.state && (this.numberOfAliveNeighbours()<2 || this.numberOfAliveNeighbours()>3))
				return false;
		if(!this.state && this.numberOfAliveNeighbours()==3)
			return true;

		return this.state
	}
}
