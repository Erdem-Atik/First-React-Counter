import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


function Increase(props){
    return (
        <div className='increase'>
         <button className="increasebtn" 
          onClick={props.onClick}
         >INCREASE</button>
        </div>
    )
}

function Decrease(props){
    return (
        <div className='decrease'>
          <button className="decreasebtn" 
          onClick={props.onClick}
         >DECREASE
         </button>   
        </div>
    )
}

function Display (props){
    return(
        <div className="display">
            <h1>{props.value}</h1>
        </div>
    )
}

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        count: 0
    };
    }
    render(){
        console.log(this.state.count)
     return(
     <div>
           <Increase 
        value = {this.state.count}
        onClick={() => this.setState({ count: this.state.count+1})} 
        />
           <Decrease 
        value = {this.state.count}
        onClick={() => this.setState({ count: this.state.count-1})} 
        />
        <Display
         value = {this.state.count}
        />
     </div>

     )
    }
  }
  



















const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>);
// class Square extends React.Component {
//     render() {
//       return (
//         <button
//           className="square"
//           onClick={() => this.props.onClick()}
//         >
//           {this.props.value}
//         </button>
//       );
//     }
//   }
  
//   class Board extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         squares: Array(9).fill(null),
//       };
//     }
  
//     handleClick(i) {
//       const squares = this.state.squares.slice();
//       squares[i] = 'X';
//       this.setState({squares: squares});
//     }
  
//     renderSquare(i) {
//       return (
//         <Square
//           value={this.state.squares[i]}
//           onClick={() => this.handleClick(i)}
//         />
//       );
//     }
  
//     render() {
//       const status = 'Next player: X';
  
//       return (
//         <div>
//           <div className="status">{status}</div>
//           <div className="board-row">
//             {this.renderSquare(0)}{this.renderSquare(1)}{this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}{this.renderSquare(4)}{this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}{this.renderSquare(7)}{this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }
  
//   class Game extends React.Component {
//     render() {
//       return (
//         <div className="game">
//           <div className="game-board">
//             <Board />
//           </div>
//           <div className="game-info">
//             <div>{/* status */}</div>
//             <ol>{/* TODO */}</ol>
//           </div>
//         </div>
//       );
//     }
//   }
  
//   // ========================================
  

  