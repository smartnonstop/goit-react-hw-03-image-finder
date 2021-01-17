import React from 'react';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
export default class App extends React.Component {
  render() {
    return (
      <div className="centerdLoader">
	      <Loader type="ThreeDots" color="#3f51b5" height={80} width={80} />
      </div>
    );
  }
}