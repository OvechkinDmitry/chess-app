import styles from './app.module.scss'
import { useEffect, useState } from 'react'
import { Board } from '../model/board'
import { BoardComponent } from '../components/board-component/board-component'

function App() {
	const [board, setBoard] = useState(new Board())
	const restart = () => {
		const newBoard = new Board()
		newBoard.initCells()
		newBoard.addFigures()
		setBoard(newBoard)
	}

	useEffect(() => {
		restart()
	}, [])

	return (
		<div className={styles.app}>
			<BoardComponent board={board} setBoard={setBoard} />
		</div>
	)
}

export default App
