import React, { Component } from 'react';

export default class SearchForm extends Component {

  state = {
    inputValue: ''
  };

  inputHandler = e => {
    this.setState({inputValue: e.target.value});
  }

  formSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.inputValue);
  }

  render() {
    return (
      <form className="SearchForm" onSubmit={this.formSubmit}>
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>

        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={this.state.inputValue}
          onChange={this.inputHandler}
        />
      </form>
    );    
  }
}