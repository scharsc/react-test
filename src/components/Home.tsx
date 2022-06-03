import React, {useState} from 'react';


interface SquareProps
{
    squareNumber: number;
}
type XorO = ""|"X"|"O" ;



class Square extends React.Component<SquareProps, XorO> {

    constructor(props: SquareProps)
    {
        super(props);
        this.state = {isXOrM: "",};
    }
    render() {
        return (
            <button className="square" onClick={ () => this.setToX() }>
                {this.mXorO}
            </button>
        );
    }
    setToX()
    {
        this.state. mXorO = "X";
    }
}

class Board extends React.Component {
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