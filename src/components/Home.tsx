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

interface BoardState
{
    squares: XorO[][];
    nextState: XorO;
}

class Board extends React.Component<{},BoardState> {
    constructor()
    {
        super({});
        this.state = { squares: Array<XorO[]>(3).fill(Array<XorO>(3).fill("")), nextState: "X" }
    }

    renderSquare(row: number, column: number) {
        return <Square xorO={this.state.squares[row][column]} onClick={ () => this.onCardClicked(row, column) }/>;
    }

    render() {
        const winner = this.isThereAWinner();

        const status =  winner != "" ?  
                            "Winner is:" + winner :  
                            'Next player: ' + this.state.nextState;
        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0,0)}
                    {this.renderSquare(0,1)}
                    {this.renderSquare(0,2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(1,0)}
                    {this.renderSquare(1,1)}
                    {this.renderSquare(1,2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(2,0)}
                    {this.renderSquare(2,1)}
                    {this.renderSquare(2,2)}
                </div>
            </div>
        );
    }

    private isThereAWinner(): XorO 
    {
        const val = [this.isThereAWinnerInRows(),
        this.isThereAWinnerInColumns(),
        this.isThereAWinnerInDiagOne(),
        this.isThereAWinnerInDiagTwo()].find( e => e != "" );
        return val == undefined? "" : val;
    }

    private isThereAWinnerInDiagTwo(): XorO {
        const diagTwoCoordinatesFunc = (i: number): [number, number] => {
            return [i, 2-i];
        }
        return this.isThereAWinnerInCoordinates(diagTwoCoordinatesFunc);
    }

    private isThereAWinnerInDiagOne(): XorO {
        const diagOneCoordinatesFunc = (i: number): [number, number] => {
            return [i,i];
        }
        return this.isThereAWinnerInCoordinates( diagOneCoordinatesFunc );
    }

    private isThereAWinnerInRows(): XorO {
        const getRowIndicesFuncForColumn = (row: number): (i: number) => [number, number] => {
            return (i: number) => [i, row];
        }
        for (let column = 0; column < 3; ++column) {
            const value = this.isThereAWinnerInCoordinates(getRowIndicesFuncForColumn(column));
            if (value != "")
                return value;
        }
        return "";
    }

    private isThereAWinnerInColumns(): XorO
    {
        const getColumnIndicesFuncForRow = (column: number): (i: number) => [number, number] => {
            return (i: number) => [column, i];
        }
        for (let row = 0; row < 3; ++row) {
            const value = this.isThereAWinnerInCoordinates(getColumnIndicesFuncForRow(row));
            if (value != "")
                return value;
        }
        return "";
    }

    private isThereAWinnerInCoordinates(partialCoordinatesFunc: (i: number) => [number, number] ): XorO 
    {
        const valueAtIndex = ( i: number ) =>{ 
            const [column, row] = partialCoordinatesFunc(i);
            return this.state.squares[column][row]; 
        };
        let value = valueAtIndex(0);
        for( let i = 1; i<3; ++i )
            if( valueAtIndex(i) != value )
                return "";
    
        return value;
    }

    private onCardClicked( row: number, column: number )
    {
        if (this.isThereAWinner() != "" )
            return;
        if (this.state.squares[row][column] != "" )
            return;

        this.setNextStateToBoard(row, column);
        this.toogleNextState();
    }

    private toogleNextState() {
        const nextState = this.state.nextState == "X" ? "O" : "X";
        this.setState({ nextState: nextState });
    }

    private setNextStateToBoard(row: number, column: number) {
        const squares = this.state.squares.map( (arr: XorO[]) => {
            return arr.slice();
        });// this.state.squares.slice();
        squares[row][column] = this.state.nextState;
        this.setState({ squares: squares });
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}

// ========================================


export default Game