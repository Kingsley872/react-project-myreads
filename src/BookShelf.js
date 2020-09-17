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
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <BookGrid
              books={books.filter(book =>
                book.shelf === 'currentlyReading'
              )}
              shelfName={Constants.BOOK_SHELFS[0]}
              bookOperation={bookOperation}
            />

        </div>
        <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <BookGrid
              books={books.filter(book =>
                book.shelf === 'wantToRead'
              )}
              shelfName={Constants.BOOK_SHELFS[1]}
              bookOperation={bookOperation}
            />

        </div>
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <BookGrid
              books={books.filter(book =>
                book.shelf === 'read'
              )}
              shelfName={Constants.BOOK_SHELFS[2]}
              bookOperation={bookOperation}
            />

          </div>
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
