import { Figure, FigureNames } from './figure'
import { Cell } from '../cell'
import { Colors } from '../colors'
import blackLogo from '../../assets/black-king.png'
import whiteLogo from '../../assets/white-king.png'

export class King extends Figure {
	constructor(cell: Cell, color: Colors) {
		super(cell, color)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureNames.KING
	}
}
