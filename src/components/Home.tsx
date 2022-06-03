import React, {useState} from 'react';


type XorO = "" | "X" | "O";

interface SquareProps
{
    squareNumber: number;
}

interface SquareState
{
    xorO: XorO;
}

class Square extends React.Component<SquareProps, SquareState> {

    constructor(props: SquareProps)
    {
        super(props);
        this.state = { xorO: ""};
    }
    render() {
        return (
            <button className="square" onClick={ () => this.setToX() }>
                {this.state.xorO}
            </button>
        );
    }
    setToX()
    {
        this.setState( { xorO: "X" } );
    }
}

interface BoardState
{
    squares: XorO[];
}

class Board extends React.Component<{},BoardState> {
    constructor()
    {
        super({});
        this.state = { squares: Array<XorO>(9).fill("") }
    }
    renderSquare(i: number) {
        return <Square squareNumber={i}/>;
    }

    render() {
        const status = 'Next player: X';

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
            </div>
        );
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