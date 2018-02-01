import React, { Component } from 'react';

class SearchInputComponent extends Component {
  constructor(){
    super();
    this.state = {
      text: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.clearInputSearch = this.clearInputSearch.bind(this);

  }

  handleChange(event){
    this.setState({text: event.target.value});
    if (event.target.value == ''){
      this.props.clearSearch();
    } else {
      this.props.performSearch(event.target.value);
    }
  }

  clearInputSearch(){
    this.setState({
      text: ''
    });
    this.props.clearSearch();
  }

  handleSearch(event){
    event.preventDefault();
  }

  render() {
    return (
      <div className={`search-bar ${this.state.text ? 'on' : ''}`}>
        <form id="search" onSubmit={this.handleSearch}>
          <input id="input-search" value={this.state.text} type="text" placeholder="Zoeken" onChange={this.handleChange}/>
          <button class="button-clear" type="clear" onClick={this.clearInputSearch}><i class="fa fa-close"></i></button>
          <button class="button-search" type="submit"><i class="fa fa-search"></i></button>
        </form>
      </div>
    );
  }
}

export default SearchInputComponent;
