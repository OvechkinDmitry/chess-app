import React, { FC } from 'react'
import './cell.scss'
import { Cell } from '../../model/cell'

type TCellComponent = {
	cell: Cell
	selected: boolean
	click: (cell: Cell) => void
}

const getColor = (cell: Cell, selected: boolean) => {
	if (selected && cell.figure) return 'selected'
	else if (cell.available) return 'available'
	else return cell.color
}

export const CellComponent: FC<TCellComponent> = ({
	cell,
	selected,
	click
}) => {
	return (
		<div
			className={['cell', getColor(cell, selected)].join(' ')}
			onClick={() => click(cell)}
		>
			{cell.figure?.logo && <img src={cell.figure.logo} alt={''} />}
		</div>
	)
}
