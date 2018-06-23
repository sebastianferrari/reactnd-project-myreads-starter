import React from 'react';
import { Link } from 'react-router-dom';
import BookShelf from './BookShelf';

function ListBooks(props) {
  return (
    <div className='list-books'>
      <div className='list-books-title'>
        <h1>MyReads</h1>
      </div>
      <div className='list-books-content'>
        <div>

          <BookShelf 
            category='Currently Reading'
            books={props.books.filter(book => book.shelf === 'currentlyReading')}
            onCategoryChange={props.onCategoryChange}
          />

          <BookShelf 
            category='Want to Read'
            books={props.books.filter(book => book.shelf === 'wantToRead')}
            onCategoryChange={props.onCategoryChange}
          />
          
          <BookShelf 
            category='Read'
            books={props.books.filter(book => book.shelf === 'read')}
            onCategoryChange={props.onCategoryChange}
          />

        </div>
      </div>
      <div className='open-search'>
        <Link
          to='/search'
        >Add a book</Link>
      </div>
    </div>
  )
}

export default ListBooks;