import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
// import { robots } from './robots';

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchField: ""
    }
    // console.log("Constructor");
  }


  onSearchChange = (event) => {
    this.setState({ searchField: event.target.value })
  }

  componentDidMount() {
    // console.log("Component did mount!");
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        return response.json();
      })
      .then((user) => {
        this.setState({
          robots: user
        })
      })

  }

  render() {
    // console.log("Render")
    const filterRobots = this.state.robots.filter((robot) => {
      return robot.name.toLowerCase().includes(this.state.searchField.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1> Loading Buddy </h1>
    } else {
      return (
        <div className="tc">
          <h1 className="f2"> RoboFriends </h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filterRobots} />
        </div>
      )
    }
  }
}



export default App;