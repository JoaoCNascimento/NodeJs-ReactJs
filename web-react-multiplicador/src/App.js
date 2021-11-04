import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      valorUm: 0,
      valorDois: 0,
      resultado: 0
    };

    this.calculate = this.calculate.bind(this);
  }

  calculate() {
    return this.setState({
      resultado: this.state.valorUm * this.state.valorDois
    })
  }

  render() {
    return(
      <div>
        <h1>Multiplicador</h1>
        <div className="container">
            <div className="counter-container">
              {this.state.resultado}
            </div>
          {/*  */}
          <div className="fields-control">
            <input type="text" onChange={(e)=>{this.setState({valorUm: Number(e.target.value)});}} value={this.state.valorUm}/>
            <p>x</p>
            <input type="text" onChange={(e)=>{this.setState({valorDois: Number(e.target.value)});}} value={this.state.valorDois}/>
          </div>
          <div className="counter-controls">
            <button onClick={() => {this.calculate()}} >Calcular</button>
            <button onClick={() => {this.setState({valorUm: 0, valorDois: 0, resultado: 0})}} >Zerar</button>
          </div>
        </div>
      </div>
    );
  }
} 

export default App;
