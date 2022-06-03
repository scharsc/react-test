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
    squares: XorO[];
    nextState: XorO;
}

class Board extends React.Component<{},BoardState> {
    constructor()
    {
        super({});
        this.state = { squares: Array<XorO>(9).fill(""), nextState: "X" }
    }

    renderSquare(i: number) {
        return <Square xorO={this.state.squares[i]} onClick={ () => this.onCardClicked(i) }/>;
    }

    render() {
        const status = 'Next player: ' + this.state.nextState;
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

    onCardClicked( i: number )
    {
        if (this.state.squares[i] != "" )
            return;

        this.setNextStateToBoard(i);
        this.toogleNextState();
    }

    private toogleNextState() {
        const nextState = this.state.nextState == "X" ? "O" : "X";
        this.setState({ nextState: nextState });
    }

    private setNextStateToBoard(i: number) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.nextState;
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