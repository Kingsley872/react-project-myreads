import React, { Component } from 'react'
import BookGrid from './BookGrid'
import { Link } from 'react-router-dom'
import * as Constants from './Constants'
import PropTypes from 'prop-types'

class BookShelf extends Component {
  render() {
    const {
      books,
      bookOperation
    } = this.props;

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          {
            Constants.SHELVES.map( item => (
              <div className="bookshelf" key={item.shelf} >
                <h2 className="bookshelf-title">{item.title}</h2>
                <BookGrid
                  books={books.filter(book =>
                    book.shelf === item.shelf
                  )}
                  shelfName={item.shelf}
                  bookOperation={bookOperation} />
              </div>
            ))
          }
        </div>

          <Link
            to="/search"
            className="open-search"
          >
          Add a book
          </Link>
      </div>
    )
  }
}

BookShelf.propTypes = {
  books: PropTypes.array.isRequired,
  bookOperation: PropTypes.func.isRequired
}

export default BookShelf
