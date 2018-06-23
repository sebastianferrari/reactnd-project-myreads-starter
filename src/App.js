import React, { Component } from 'react';
import * as BooksAPI from './BooksAPI';
import './App.css';
import { Route } from 'react-router-dom';
import Search from './Search';
import ListBooks from './ListBooks';

class BooksApp extends Component {
  state = {
    books: [],
    searchingBooks: []
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

  searchBooks = searchTerm => {
    //console.log('Search Term', searchTerm);
    if (searchTerm.length === 0) {
      this.setState({
        searchingBooks: []
      })
    } else if (searchTerm.length < 3) {
      // Do nothing because the shorter word in search terms available has 3 characters.
      //console.log('searchTerm.length', searchTerm.length);
    } else {
      BooksAPI.search(searchTerm)
        .then((books) => {
          if (!books.error) {

            // Before set state we need to map adding a shelf property.
            let ourBooks = books.map(book => (
              Object.assign({ shelf: 'none' }, {...book})
            ))

            // And here we need to map our states with the search result categories.
            for (let i in ourBooks) {
              var inOurShelf = this.state.books.filter(element => (
                element.industryIdentifiers[0].identifier === ourBooks[i].industryIdentifiers[0].identifier
                &&
                element.contentVersion === ourBooks[i].contentVersion
              ));
              
              if (inOurShelf.length > 0) {
                ourBooks[i].shelf = inOurShelf[0].shelf
              }
            }
            
            // console.log('Our books', ourBooks);
            this.setState(() => ({
              searchingBooks: ourBooks
            }));
            // console.log("Searched Books", books);
          } else {
            this.setState({
              searchingBooks: []
            })
          }
        })
    }
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <Search
            searchBooks={this.searchBooks}
            resultBooksList={this.state.searchingBooks}
          />
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
