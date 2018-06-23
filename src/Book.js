import React, { Component } from 'react';

class Book extends Component {
  state = {
    book: this.props.book,
    categorySelected: this.props.book.shelf
  }

  handleCategoryChange = (e) => {
    this.setState({
      categorySelected: e.target.value
    })
    //this.props.updateCategory(this.state.book, e.target.value);
  }

  render() {
    let image = this.props.book.imageLinks
                  ? this.props.book.imageLinks.thumbnail
                  : '';

    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${image})`
            }}></div>
          <div className="book-shelf-changer">
            <select value={this.state.categorySelected} onChange={this.handleCategoryChange}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{this.props.book.title}</div>
        {this.props.book.authors 
          ? this.props.book.authors.map(author => (
            <div key={author} className="book-authors">{author}</div>
          ))
          : null
        }
      </div>
    )
  }
}

export default Book;