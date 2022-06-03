import React, {useState} from 'react';

type XorO = "" | "X" | "O";

interface SquareProps
{
    xorO: XorO;
    onClick: () => void;
}

const Square: React.FC<SquareProps> = (props: SquareProps) =>
{
    return (
        <button className="square" onClick={props.onClick}>
            {props.xorO}
        </button>
    );
}

type BoardArray = XorO[][];

interface BoardState
{
    squares: BoardArray;
    nextState: XorO;
}

interface BoardProps
{
    squares: BoardArray;
    onClick: ( column: number, row: number) => void;
}

class Board extends React.Component<BoardProps,{}> {
    constructor(props: BoardProps)
    {
        super(props);
    }

    renderSquare(row: number, column: number) {
        return <Square xorO={this.props.squares[column][row]} onClick={ () => this.props.onClick( column, row ) }/>;
    }

    render() {
        return (
            <div>
                <div className="board-row">
                    {this.renderSquare(0,0)}
                    {this.renderSquare(1,0)}
                    {this.renderSquare(2,0)}
                </div>
                <div className="board-row">
                    {this.renderSquare(0,1)}
                    {this.renderSquare(1,1)}
                    {this.renderSquare(2,1)}
                </div>
                <div className="board-row">
                    {this.renderSquare(0,2)}
                    {this.renderSquare(1,2)}
                    {this.renderSquare(2,2)}
                </div>
            </div>
        );
    }

    // private onCardClicked( column: number, row: number )
    // {
    //     this.setNextStateToBoard( column, row );
    //     this.toogleNextState();
    // }

    // private toogleNextState() {
    //     const nextState = this.state.nextState == "X" ? "O" : "X";
    //     this.setState({ nextState: nextState });
    // }

    // private setNextStateToBoard(row: number, column: number) {
    //     const squares = this.state.squares.map( (arr: XorO[]) => {
    //         return arr.slice();
    //     });// this.state.squares.slice();
    //     squares[row][column] = this.state.nextState;
    //     this.setState({ squares: squares });
    // }
}

interface GameState
{
    boardHistory: BoardState[];
}

class Game extends React.Component<{}, GameState > {
    constructor() {
        super({});
        const initBoard: BoardState = { squares: Array<XorO[]>(3).fill(Array<XorO>(3).fill("")), nextState: "X" };
        this.state = { boardHistory: [ initBoard ] };
    }
    render() {
        const lastBoardState = this.getLastBoardState();

        const winner = BoardStateChecker.isThereAWinner( lastBoardState.squares );

        const status = winner != "" ?
            "Winner is:" + winner :
            'Next player: ' + lastBoardState.nextState;

        return (
            
            <div className="game">
                <div className="game-board">
                    <Board squares={lastBoardState.squares} onClick={ (column: number, row: number) => this.onClick(this, column, row) }/>
                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>
                        <li>fasdf</li>
                    </ol>
                </div>
            </div>
        );
    }

    onClick(that: Game, column: number, row: number )
    {
        const lastBoardState = that.getLastBoardState();
        const squares = lastBoardState.squares;
        if (BoardStateChecker.isThereAWinner(squares) != "")
            return;
        if (squares[column][row] != "")
            return;

        this.setNewState( column, row, lastBoardState.nextState );
    }

    setNewState( column: number, row: number, value: XorO )
    {
        const newBoardState = this.getLastBoardState();
        newBoardState.squares[column][row] = value;
        newBoardState.nextState = newBoardState.nextState == "X" ? "O" : "X";

        this.setState({ boardHistory: [ ...this.state.boardHistory.slice(), newBoardState] });
    }

    getLastBoardState(): BoardState
    {
        const boardHistory = this.state.boardHistory;
        const lastBoard = boardHistory[boardHistory.length - 1];
        return JSON.parse(JSON.stringify(lastBoard));
    }
}

// ========================================

function autobind(_: any, _2: string, desciptor: PropertyDescriptor) {
    const originalMethod = desciptor.value;
    return {
        configurable: true,
        get() {
            return originalMethod.bind(this);
        }
    }
}

namespace BoardStateChecker {
    export  function isThereAWinner(boardarray: BoardArray): XorO {
        const val = [isThereAWinnerInRows(boardarray),
        isThereAWinnerInColumns(boardarray),
        isThereAWinnerInDiagOne(boardarray),
        isThereAWinnerInDiagTwo(boardarray)].find(e => e != "");
        return val == undefined ? "" : val;
    }

    function isThereAWinnerInDiagTwo(boardarray: BoardArray): XorO {
        const diagTwoCoordinatesFunc = (i: number): [number, number] => {
            return [i, 2 - i];
        }
        return isThereAWinnerInCoordinates(boardarray, diagTwoCoordinatesFunc);
    }

    function isThereAWinnerInDiagOne(boardarray: BoardArray): XorO {
        const diagOneCoordinatesFunc = (i: number): [number, number] => {
            return [i, i];
        }
        return isThereAWinnerInCoordinates(boardarray, diagOneCoordinatesFunc);
    }

    function isThereAWinnerInRows(boardarray: BoardArray): XorO {
        const getRowIndicesFuncForColumn = (row: number): (i: number) => [number, number] => {
            return (i: number) => [i, row];
        }
        for (let column = 0; column < 3; ++column) {
            const value = isThereAWinnerInCoordinates(boardarray, getRowIndicesFuncForColumn(column));
            if (value != "")
                return value;
        }
        return "";
    }

    function isThereAWinnerInColumns(boardarray: BoardArray): XorO {
        const getColumnIndicesFuncForRow = (column: number): (i: number) => [number, number] => {
            return (i: number) => [column, i];
        }
        for (let row = 0; row < 3; ++row) {
            const value = isThereAWinnerInCoordinates(boardarray, getColumnIndicesFuncForRow(row));
            if (value != "")
                return value;
        }
        return "";
    }

    function isThereAWinnerInCoordinates(boardarray: BoardArray, partialCoordinatesFunc: (i: number) => [number, number]): XorO {
        const valueAtIndex = (i: number) => {
            const [column, row] = partialCoordinatesFunc(i);
            return boardarray[column][row];
        };
        let value = valueAtIndex(0);
        for (let i = 1; i < 3; ++i)
            if (valueAtIndex(i) != value)
                return "";

        return value;
    }
}

export default Game