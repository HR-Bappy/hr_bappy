"use client";
import React, { useEffect, useState } from "react";
import "./tic-tac.scss";
import Alert from "@/components/alert/alert";

function TicTacToe() {
	const [flag, setFlag] = useState(false);
	const [board, setBoard] = useState([
		["", "", ""],
		["", "", ""],
		["", "", ""],
	]);
	const [winner, setWinner] = useState("-1");

	// useEffect(() => {
	// 	if (winner == "x") {
	// 		alert("x-player win");
	// 		setBoard(initialBoard);
	// 		setFlag(false);
	// 	}
	// 	if (winner == "o") {
	// 		alert("o-player win");
	// 		setBoard(initialBoard);
	// 		setFlag(false);
	// 	}
	// }, [winner]);

	const handleClick = (l: any, r: any, value: any) => {
		if (value == "-1") return;
		let temp: any = [...board];
		if (!flag) temp[l][r] = "o";
		else temp[l][r] = "x";
		setBoard(temp);
		setFlag(!flag);
		let tempWinner = checkResult(temp);
		if (tempWinner == "x") {
			// setBoard([
			// 	["", "", ""],
			// 	["", "", ""],
			// 	["", "", ""],
			// ]);
			// setFlag(false);
			setWinner("x");
		} else if (tempWinner == "o") {
			// setBoard([
			// 	["", "", ""],
			// 	["", "", ""],
			// 	["", "", ""],
			// ]);
			// setFlag(false);
			setWinner("o");
		}
	};
	console.log("board", board);
	function checkResult(tempBoard: any) {
		// Check rows
		for (let row of tempBoard) {
			if (row.every((cell: any) => cell === "x")) return "x";
			if (row.every((cell: any) => cell === "o")) return "o";
		}

		// Check columns
		for (let col = 0; col < 3; col++) {
			if (
				tempBoard[0][col] === "x" &&
				tempBoard[1][col] === "x" &&
				tempBoard[2][col] === "x"
			)
				return "x";
			if (
				tempBoard[0][col] === "o" &&
				tempBoard[1][col] === "o" &&
				tempBoard[2][col] === "o"
			)
				return "o";
		}

		// Check diagonals
		if (
			(tempBoard[0][0] === "x" &&
				tempBoard[1][1] === "x" &&
				tempBoard[2][2] === "x") ||
			(tempBoard[0][2] === "x" &&
				tempBoard[1][1] === "x" &&
				tempBoard[2][0] === "x")
		)
			return "x";
		if (
			(tempBoard[0][0] === "o" &&
				tempBoard[1][1] === "o" &&
				tempBoard[2][2] === "o") ||
			(tempBoard[0][2] === "o" &&
				tempBoard[1][1] === "o" &&
				tempBoard[2][0] === "o")
		)
			return "o";

		return "-1";
	}

	return (
		<div className="tic-tac">
			<div className="main-wrap">
				<div className="main-wrap__inside">
					<div className="board-instructions">
						Please select a square to place your mark.
					</div>

					<div className="board">
						<table>
							<tbody>
								{board?.map((row: any, index: any) => {
									return (
										<tr key={index}>
											{row?.map((column: any, indx: any) => {
												return (
													<td
														className={
															column == "x"
																? "x-mark"
																: column == "o"
																? "o-mark"
																: ""
														}
														onClick={() =>
															handleClick(index, indx, column == "" ? "" : "-1")
														}
														key={indx}
														title={!flag ? "o's turn" : "x's turn"}
													>
														{column}
													</td>
												);
											})}
										</tr>
									);
								})}
							</tbody>
						</table>
						{winner != "-1" && (
							<div className="game-over">
								<h1>Game Over!</h1>
								{winner == "x" && <h4>x-mark win</h4>}
								{winner == "o" && <h4>o-mark win</h4>}
								<div className="control-panel">
									<button
										onClick={() => {
											setBoard([
												["", "", ""],
												["", "", ""],
												["", "", ""],
											]);
											setFlag(false);
											setWinner("-1");
										}}
									>
										Reset
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
			{/* {winner != "-1" && (
				<Alert
					setIsShow={setWinner}
					message={winner == "x" ? "x-mark win" : "o-mark win"}
					success={winner == "x" || (winner === "o" && true)}
				/>
			)} */}
		</div>
	);
}

export default TicTacToe;
