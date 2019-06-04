import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component{
  state = {
    users: []
  }

  componentDidMount(){
    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({users}));
  }

render(){
  return (
    <div className="App">
      {this.state.users.map(users => 
        <h1>{users.user_name}</h1>
      )}
    </div>
  )
}
}

export default App;
