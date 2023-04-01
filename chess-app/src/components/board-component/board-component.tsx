import React, { FC, Fragment } from 'react'
import styles from './board.module.scss'
import { Board } from '../../model/board'
import { CellComponent } from '../cell-component/cell-component'

type TBoardComponent = {
	board: Board
	setBoard: (board: Board) => void
}

export const BoardComponent: FC<TBoardComponent> = ({ board, setBoard }) => {
	return (
		<div className={styles.board}>
			{board.cells.map((row, index) => {
				return (
					<Fragment key={index}>
						{row.map(cell => (
							<CellComponent cell={cell} key={cell.id}></CellComponent>
						))}
					</Fragment>
				)
			})}
		</div>
	)
}
