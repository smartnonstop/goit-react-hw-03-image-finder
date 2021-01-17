import React, { Component } from 'react';

export default class Button extends Component {
  
  

  componentDidMount() {
    console.log("Button didmount, page: "+this.props.page);
  }

  shouldComponentUpdate(nextProps) {
    if (nextProps.page === 2) {
      return false;
    }

    return true;
  }

  componentDidUpdate() {
    console.log("Button didupdate, page: "+this.props.page);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }
  
  render() {
    return (
      <button className="Button" onClick={this.props.click}>Load more</button>
    );
  }

}