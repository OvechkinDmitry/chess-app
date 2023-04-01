import React, { FC, Fragment, useEffect, useState } from 'react'
import styles from './board.module.scss'
import { Board } from '../../model/board'
import { CellComponent } from '../cell-component/cell-component'
import { Cell } from '../../model/cell'

type TBoardComponent = {
	board: Board
	setBoard: (board: Board) => void
}

export const BoardComponent: FC<TBoardComponent> = ({ board, setBoard }) => {
	const [selectedCell, setSelectedCell] = useState<Cell | null>(null)
	const onClick = (cell: Cell) => {
		if (
			selectedCell &&
			selectedCell !== cell &&
			selectedCell.figure?.canMove(cell)
		) {
			selectedCell.moveFigure(cell)
			setSelectedCell(null)
		} else setSelectedCell(cell)
	}

	useEffect(() => {
		console.log(selectedCell)
		highlightCells()
	}, [selectedCell])

	const updateBoard = () => {
		const newBoard = board.getCopyBoard()
		setBoard(newBoard)
	}

	const highlightCells = () => {
		board.highlightCells(selectedCell)
		updateBoard()
	}
	return (
		<div className={styles.board}>
			{board.cells.map((row, index) => {
				return (
					<Fragment key={index}>
						{row.map(cell => (
							<CellComponent
								click={onClick}
								cell={cell}
								key={cell.id}
								selected={
									cell.x === selectedCell?.x && cell.y === selectedCell?.y
								}
							></CellComponent>
						))}
					</Fragment>
				)
			})}
		</div>
	)
}
