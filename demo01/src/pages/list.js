import React, { Component } from 'react';
class list extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: ''
    };
  }
  render() {
    return (
      <h2>
        list---{this.state.id}
      </h2>
    );
  }
  componentDidMount() {
    console.log(this.props.match)
    this.setState({
      id: this.props.match.params.id
    })
  }
}

export default list;