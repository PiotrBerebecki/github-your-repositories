import React, { Component } from 'react';
import './index.css';

class App extends Component {
  constructor() {
    super();
    this.changeFilter = this.changeFilter.bind(this);

    this.state = {
      count: 88,
      filterActive: 'All'
    };
  }

  changeFilter(e) {
    this.setState({
      filterActive: e.target.id
    });
  }

  render() {
    const { count, filterActive } = this.state;

    const renderFilterItems = ['All', 'Public', 'Private', 'Sources', 'Forks']
      .map((item, index) => {
        return (
          <li className="filter__item" key={`${item}`}>
            <button
              className={item === filterActive ? 'filter__btn filter__btn--active filter__btn--' + item : `filter__btn`}
              id={item}
              onClick={this.changeFilter}
            >
              {item}
            </button>
          </li>
        );
      });

    return (
      <div className="widget-repos">

        <section className="header">
          <h3 className="header__title">Your repositories</h3>
          <span className="header__count">
            {count}
          </span>
        </section>

        <section className="search">
          <input
            className="search__field"
            type="text"
            placeholder="Find a repository"
          />
        </section>

        <section className="filter">
          <ul className="filter__list">
            {renderFilterItems}
          </ul>
        </section>

        <section className="repos">
          CSS
          js
        </section>

      </div>
    );
  }
}

export default App;
