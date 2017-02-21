import React, { Component } from 'react';

import Database from './../Database';
import './index.css';
import iconRepoPublic from './../Images/repo-public.svg';

class App extends Component {
  constructor() {
    super();
    this.changeFilter = this.changeFilter.bind(this);

    this.state = {
      count: 88,
      filterSelected: 'All'
    };
  }

  changeFilter(e) {
    this.setState({
      filterSelected: e.target.id
    });
  }

  render() {
    const { count, filterSelected } = this.state;

    const renderFilterItems = ['All', 'Public', 'Private', 'Sources', 'Forks']
      .map((item, index) => {
        return (
          <li className="filter__item" key={`${item}`}>
            <button
              className={`filter__btn${(item === filterSelected ? ' filter__btn--selected' : '')}`}
              disabled={item === filterSelected ? true : false}
              id={item}
              onClick={this.changeFilter}
            >
              {item}
            </button>
          </li>
        );
      });

    const filterSelectedLowerCase = filterSelected.toLowerCase();
    const renderRepos = Database
      .filter(repo => filterSelected === 'All' || repo[filterSelectedLowerCase])
      .map((repo, index) => {
        return (
          <li className="repos__item" key={index}>
            <img className="repos__icon" src={iconRepoPublic} alt="public repo icon" />
            <a className="repos__link" href="#">{repo.name}</a>
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
          <ul className="repos__list">
            {renderRepos}
          </ul>
        </section>

      </div>
    );
  }
}

export default App;
