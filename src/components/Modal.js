import React, { Component } from 'react';


export default class Modal extends Component {
  
  componentDidMount() {
    window.addEventListener('keydown', this.handleEscape);
    window.addEventListener('click', this.handleClickClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEscape);
    window.removeEventListener('click', this.handleClickClose);
  }

  handleEscape = (e) => {
    if(e.code === "Escape") {
      this.props.onClose();
    }
  }

  handleClickClose = (e) => {
    console.log(e);
    if(e.target.className==="Overlay") {
      this.props.onClose();
    }
  }

  render() {
    return (
      <div className="Overlay">
        <div className="Modal">
          <img src={this.props.modalImg} alt="" />
        </div>
      </div>
    );
  }

}