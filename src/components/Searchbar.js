import React from 'react';
import SearchForm from './SearchForm';

export default function Searchbar({ onSearch }) {

  return (
    <header className="Searchbar">
      <SearchForm onSearch={onSearch} />
    </header>
  ); 
  
}