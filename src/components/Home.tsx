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
        const status = 'Next player: ' + this.state.nextState;
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

    // private isThereAWinner(): XorO 
    // {

    // }

    onCardClicked( row: number, column: number )
    {
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