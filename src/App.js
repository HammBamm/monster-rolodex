import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component'
import { SearchBox } from './components/search-box/search-box.component.jsx'

class App extends Component {
  constructor() {

    super();

    this.state = {
      monsters: [],
      searchField: ''
    }
  };

  handleChange = e => {
    this.setState({searchField: e.target.value});
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())  
    );
    return (
      <div className='App'>
        <h1>Monster Mania</h1>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}>
        </SearchBox>
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
