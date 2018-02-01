import React, { Component } from 'react';
import ResultComponent from './ResultComponent'

class ResultsListComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.list.map((item, key) =>
            <li key={key}>
              <ResultComponent
              searchterm={item.searchterm}
              nrResults={item.nrResults}
              textSearch={this.props.textSearch}/>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default ResultsListComponent;
