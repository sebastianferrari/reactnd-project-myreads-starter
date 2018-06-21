import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import Search from './Search';
import ListBooks from './ListBooks';

class BooksApp extends Component {
  state = {
    books: [
      {
        title: 'The Linux Command Line',
        authors: [
          'William E. Shotts, Jr.'
        ],
        image: 'http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        category: 0
      },
      {
        title: 'Learning Web Development with React and Bootstrap',
        authors: [
          'Harmeet Singh',
          'Mehul Bhatt'
        ],
        image: 'http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api',
        category: 1
      }
    ]
  }

  componentDidMount() {
    // BooksAPI.getAll()
    //   .then((books) => {
    //     this.setState(() => ({
    //       books
    //     }));
    //     console.log('Books', books);
    //   })
  }

  addBook = book => {
    
  }

  changeCategory = newCategory => {

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
