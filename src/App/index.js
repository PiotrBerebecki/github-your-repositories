import React, { Component } from 'react';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 88
    };
  }

  render() {
    return (
      <div className="repos">

        <section className="header">
          <h3 className="header__title">Your repositories</h3>
          <span className="header__count">
            {this.state.count}
          </span>
        </section>

        <section className="search">
          <input
            className="search__field"
            type="text"
            placeholder="Find a repository"
          />
        </section>

        <section className="tabs">
          <ul className="tabs__list">
            <li className="tabs_item">All</li>
            <li className="tabs_item">Public</li>
            <li className="tabs_item">Private</li>
            <li className="tabs_item">Sources</li>
            <li className="tabs_item">Forks</li>
          </ul>
        </section>



      </div>
    );
  }
}

export default App;
