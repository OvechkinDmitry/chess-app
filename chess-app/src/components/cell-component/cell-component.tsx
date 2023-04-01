import React, { FC } from 'react'
import './cell.scss'
import { Cell } from '../../model/cell'

type TCellComponent = {
	cell: Cell
}

export const CellComponent: FC<TCellComponent> = ({ cell }) => {
	return (
		<div className={['cell', cell.color].join(' ')}>
			{cell.figure?.logo && <img src={cell.figure.logo} alt={''} />}
		</div>
	)
}
