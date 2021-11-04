import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      qtdPessoas: 0
    };

    this.updateQtdPessoas = this.updateQtdPessoas.bind(this);
  }

  updateQtdPessoas(operator) {
    if(operator === '+')
      return this.setState({qtdPessoas: this.state.qtdPessoas + 1});

    return this.state.qtdPessoas > 0 ? this.setState({qtdPessoas: this.state.qtdPessoas - 1}) : 0;
  }

  render() {
    return(
      <div>
        <h1>Contador de pessoas</h1>
        <div className="container">
            <div className="counter-container">
              {this.state.qtdPessoas}
            </div>
          {/*  */}
          <div className="counter-controls">
            <button onClick={() => {this.updateQtdPessoas('+')}} >+1</button>
            <button onClick={() => {this.updateQtdPessoas('-')}}  >-1</button>
          </div>
        </div>
      </div>
    );
  }
} 

export default App;
