import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import Search from './Search';
import ListBooks from './ListBooks';

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }));
        console.log('Books', books);
      })
  }

  addBook = book => {
    
  }

  changeCategory = newCategory => {

  }

  searchBook = searchTerm => {
    // BooksAPI.search()
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <Search />
        )} />
        <Route exact path='/' render={() => (
          <ListBooks
            books={this.state.books}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
