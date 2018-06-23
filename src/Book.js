import React, { Component } from 'react';

class Book extends Component {
  state = {
    categorySelected: this.props.book.shelf
  }

  handleCategoryChange = (e) => {
    this.setState({
      categorySelected: e.target.value
    })
  }

  render() {
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url(${this.props.book.imageLinks.thumbnail})`
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
        {this.props.book.authors.map(author => (
          <div key={author} className="book-authors">{author}</div>
        ))}
      </div>
    )
  }
}

export default Book;