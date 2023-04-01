import { Figure, FigureNames } from './figure'
import { Cell } from '../cell'
import { Colors } from '../colors'
import blackLogo from '../../assets/black-bishop.png'
import whiteLogo from '../../assets/white-bishop.png'

export class Bishop extends Figure {
	constructor(cell: Cell, color: Colors) {
		super(cell, color)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureNames.BISHOP
	}
}
