import { Cell } from './cell'
import { Colors } from './colors'
import { Pawn } from './figures/pawn'
import { King } from './figures/king'
import { Queen } from './figures/queen'
import { Bishop } from './figures/bishop'
import { Knight } from './figures/knight'
import { Rook } from './figures/rook'

export class Board {
	cells: Cell[][] = []

	public initCells() {
		for (let i = 0; i < 8; i++) {
			const row: Cell[] = []
			for (let j = 0; j < 8; j++) {
				if ((i + j) % 2 !== 0)
					row.push(new Cell(this, j, i, Colors.BLACK, null)) //черные
				else row.push(new Cell(this, j, i, Colors.WHITE, null)) //белые
			}
			this.cells.push(row)
		}
	}

	public getCell(x: number, y: number) {
		return this.cells[y][x]
	}

	private addPawns() {
		for (let i = 0; i < 8; i++) {
			new Pawn(this.getCell(i, 6), Colors.WHITE)
			new Pawn(this.getCell(i, 1), Colors.BLACK)
		}
	}

	private addKings() {
		new King(this.getCell(4, 7), Colors.WHITE)
		new King(this.getCell(4, 0), Colors.BLACK)
	}

	private addQueens() {
		new Queen(this.getCell(3, 7), Colors.WHITE)
		new Queen(this.getCell(3, 0), Colors.BLACK)
	}

	private addBishops() {
		new Bishop(this.getCell(2, 7), Colors.WHITE)
		new Bishop(this.getCell(5, 7), Colors.WHITE)
		new Bishop(this.getCell(2, 0), Colors.BLACK)
		new Bishop(this.getCell(5, 0), Colors.BLACK)
	}

	private addKnights() {
		new Knight(this.getCell(1, 7), Colors.WHITE)
		new Knight(this.getCell(6, 7), Colors.WHITE)
		new Knight(this.getCell(1, 0), Colors.BLACK)
		new Knight(this.getCell(6, 0), Colors.BLACK)
	}

	private addRooks() {
		new Rook(this.getCell(0, 7), Colors.WHITE)
		new Rook(this.getCell(7, 7), Colors.WHITE)
		new Rook(this.getCell(0, 0), Colors.BLACK)
		new Rook(this.getCell(7, 0), Colors.BLACK)
	}

	public addFigures() {
		this.addPawns()
		this.addKings()
		this.addKnights()
		this.addBishops()
		this.addQueens()
		this.addRooks()
	}
}
