import React, { Component } from 'react';

class ResultComponent extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.searchterm}
        ({this.props.nrResults})
      </div>
    );
  }
}

export default ResultComponent;
