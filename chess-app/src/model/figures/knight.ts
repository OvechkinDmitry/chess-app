import { Figure, FigureNames } from './figure'
import { Cell } from '../cell'
import { Colors } from '../colors'
import blackLogo from '../../assets/black-knight.png'
import whiteLogo from '../../assets/white-knight.png'

export class Knight extends Figure {
	constructor(cell: Cell, color: Colors) {
		super(cell, color)
		this.logo = color === Colors.BLACK ? blackLogo : whiteLogo
		this.name = FigureNames.KNIGHT
	}
}
