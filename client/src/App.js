import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Jumbotron from './components/Jumbotron/Jumbotron';
import Starred from './components/Starred/Starred';
import Results from './components/Results/Results'
import API from './util/API';

class App extends React.Component {
  state = {
    items: [],
    searchTerm: "",
    saved: false,
    showStarred: false,
    starredBooks: [],
  };

  componentDidMount() {}

  fetchData = () => {
   
    let formatedSearch = this.state.searchTerm.split(" ").join("+");
    fetch(`https://www.googleapis.com/books/v1/volumes?q=${formatedSearch}`)
      .then(res => res.json())
      .then(response => this.setState({ items: response.items }))
      .catch(err => {
        
      });
  };

  handleFormSubmit = e => {
    e.preventDefault();
   this.setState(
     { showStarred: false },
      this.fetchData())
    
  };
 
  handleSaveBook = e => {
    API.saveBook(e.currentTarget.dataset.key)
    .then(this.setState({saved: true}))
    .catch(err => console.log(err));
  }

  handleDeleteBook = e =>{
    e.preventDefault();
    API.deleteBook(e.currentTarget.dataset.id)
    .then(res=>{this.toggleStarred()})
    .then(res=>{this.toggleStarred()})

  }

  handleInputChange = e => {
    this.setState({searchTerm: e.currentTarget.value})
  };

  toggleStarred = ()=>{
    API.getBooks()
    .then(response =>{
      
      this.setState(
        { showStarred: !this.state.showStarred,
        starredBooks : response.data })
      
    })
    
  }

  render() {
    return (
      <div className="App">
        <Navbar
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
          toggleStarred={this.toggleStarred}
        />
        <Jumbotron />
        <Results
          items={this.state.items}
          saved={this.state.saved}
          starred={this.state.showStarred}
          handleSave={this.handleSaveBook}
        />
        <Starred
          starred={this.state.showStarred}
          books={this.state.starredBooks}
          handleDeleteBook={this.handleDeleteBook}
        />
      </div>
    );
  }
}

export default App;
