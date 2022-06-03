import React, {useState} from 'react';

type XorO = "" | "X" | "O";

interface SquareProps
{
    xorO: XorO;
    onClick: () => void;
}

class Square extends React.Component<SquareProps, {}> {

    constructor(props: SquareProps)
    {
        super(props);
    }
    render() {
        return (
            <button className="square" onClick={ this.props.onClick }>
                {this.props.xorO}
            </button>
        );
    }
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
        const squares = this.state.squares.slice();
        squares[i] = this.state.nextState;
        this.setState({ squares: squares });
        const nextState = this.state.nextState == "X" ? "O" : "X";
        this.setState( {nextState: nextState} );
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