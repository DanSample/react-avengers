import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      avengers: [
        { name: 'Captain America', id: 1 },
        { name: 'Iron Man', id: 2 },
        { name: 'Thor', id: 3 }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>Avengers: by Dan Sample</p>
          <div>
            {this.state.avengers.map(a => (
              <div key={a.id}>
                <p>Name: {a.name}</p>
              </div>
            ))}
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
export default App;
