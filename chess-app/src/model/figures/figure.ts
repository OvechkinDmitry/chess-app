import { Colors } from '../colors'
import logo from '../../assets/white-knight.png'
import { Cell } from '../cell'

export enum FigureNames {
	FIGURE = 'Фигура',
	KING = 'Король',
	KNIGHT = 'Конь',
	PAWN = 'Пешка',
	QUEEN = 'Ферзь',
	ROOK = 'Ладья',
	BISHOP = 'Слон'
}
export class Figure {
	color: Colors
	logo: typeof logo | null
	cell: Cell
	name: FigureNames
	id: number

	constructor(cell: Cell, color: Colors) {
		this.color = color
		this.cell = cell
		this.cell.figure = this
		this.logo = null
		this.name = FigureNames.FIGURE
		this.id = Math.random()
	}

	canMove(target: Cell): boolean {
		if (this.color === target.figure?.color) return false
		if (target.figure?.name === FigureNames.KING) return false
		return true
	}

	moveFigure(target: Cell) {}
}
