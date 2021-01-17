import React, { Component } from 'react';
import imagesApi from './../services/imagesApi';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import Button from './Button';
import Loader from './Loader';
import Modal from './Modal';

export default class App extends Component {

  state = {
    searchQuery: '',
    images: [],
    page: 1,
    modalImg: '',
    isLoading: false,
    error: null
  };

  componentDidUpdate(prevProps, prevState) {
    if(prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  handleSearchForm = (query) => {
    this.setState({ searchQuery: query, images: [], page: 1});
  }

  fetchImages = () => {
    const { searchQuery, page } = this.state;
    this.setState({ isLoading:true });

    imagesApi.fetchImages(searchQuery, page)
    .then(images => {
      this.setState(prevState => ({
        images: [...prevState.images, ...images],
        page: prevState.page + 1
      }));
    })
    .catch(error => this.setState({error}))
    .finally(() => this.setState({ isLoading: false }));
  }

  setModalImg = (img) => {
    this.setState({ modalImg: img});
  }

  modalClose = () => {
    this.setState({ modalImg: ''});
  }


  render() {

    const { page, images, modalImg, error, isLoading } = this.state;
    return (
      <>
        <div className="App">
          <Searchbar onSearch={this.handleSearchForm} />
        </div>
        <ImageGallery images={this.state.images} modalImg={this.setModalImg} />

        { modalImg!=='' && <Modal modalImg={modalImg} onClose={this.modalClose} />}
        { isLoading && <Loader />}
        { error && <p>Something go bad, please reload page...</p>}
        { images.length > 0 && <Button page={page} click={this.fetchImages} />}
      </>
      
    );
  }
}