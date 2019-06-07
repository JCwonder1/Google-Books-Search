import React from 'react';
import logo from './logo.svg';
import './App.css';



class App extends React.Component{
  state = {
    items: []
  }

  componentDidMount(){
    fetch("https://www.googleapis.com/books/v1/volumes?q=harry+potter")
      .then(res => res.json())
      .then(response => this.setState({items: response.items}));
  }

render(){
  console.log(this.state.items);
  return (
    <div className="App">
      {this.state.items.map(items => (
        <div key={items.id}>
          <h1>{items.volumeInfo.title}</h1>
          <h5>{items.searchInfo.textSnippet}</h5>
        </div>
      ))}
    </div>
  );
  
}
}

export default App;
