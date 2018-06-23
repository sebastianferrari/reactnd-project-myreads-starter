import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onCategoryChange: PropTypes.func.isRequired
  }

  handleCategoryChange = (e) => {
    if (this.props.onCategoryChange) {
      this.props.onCategoryChange(this.props.book, e.target.value);
    }
  }

  render() {
    const { book } = this.props;

    let image = book.imageLinks
      ? book.imageLinks.thumbnail
      : '';

    return (
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${image})`
            }}></div>
          <div className='book-shelf-changer'>
            <select
              value={book.shelf}
              onChange={this.handleCategoryChange}
            >
              <option value='move' disabled>Move to...</option>
              <option value='currentlyReading'>Currently Reading</option>
              <option value='wantToRead'>Want to Read</option>
              <option value='read'>Read</option>
              <option value='none'>None</option>
            </select>
          </div>
        </div>
        <div className='book-title'>{book.title}</div>
        {book.authors
          ? book.authors.map(author => (
            <div key={author} className='book-authors'>{author}</div>
          ))
          : null
        }
      </div>
    )
  }
}

export default Book;