import { Figure, FigureNames } from './figure'
import { Cell } from '../cell'
import { Colors } from '../colors'
import blackLogo from '../../assets/black-queen.png'
import whiteLogo from '../../assets/white-queen.png'

export class Queen extends Figure {
	constructor(cell: Cell, color: Colors) {
		super(cell, color)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureNames.QUEEN
	}
}
