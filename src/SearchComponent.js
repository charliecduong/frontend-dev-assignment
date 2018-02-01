import React, { Component } from 'react';
import SearchInputComponent from './SearchInputComponent';
import ResultsListComponent from './ResultsListComponent';

class SearchComponent extends Component {
  constructor(){
    super();
    this.state = {
      text: '',
      loading: false,
      results: []
    };
    this.performSearch = this.performSearch.bind(this);
    this.clearSearch = this.clearSearch.bind(this);
  }

  performSearch(text){
    const self = this;
    this.setState({loading: true, text: text})
    fetch('http://localhost:5000/search?q='+text)
    .then((result) => {
      return result.json();
    }).then((data) => {
      console.log(data.suggestions);
      this.setState({
        results: data.suggestions,
        loading: false
      })
    });
  }

  clearSearch(){
    console.log('clean');
    this.setState({results: []});
  }

  render() {
    return (
        <SearchInputComponent
        performSearch={this.performSearch}
        clearSearch={this.clearSearch} />
    );
  }
}

export default SearchComponent;
