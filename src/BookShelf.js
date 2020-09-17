import React, { Component } from 'react'
import BookGrid from './BookGrid'
import { Link } from 'react-router-dom'

const shelfs = [
  'Currently Reading',
  'Want to Read',
  'Read'
]

class BookShelf extends Component {
  render() {
    const {
      currList,
      wantList,
      readList,
      moveToCurrReadingList,
      moveToWanttoReadList,
      moveToReadList,
      deleteBookFromList
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
              books={currList}
              shelfName={shelfs[0]}
              moveToCurrReadingList={moveToCurrReadingList}
              moveToWanttoReadList={moveToWanttoReadList}
              moveToReadList={moveToReadList}
              deleteBookFromList={deleteBookFromList}
            />

        </div>
        <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <BookGrid
              books={wantList}
              shelfName={shelfs[1]}
              moveToCurrReadingList={moveToCurrReadingList}
              moveToWanttoReadList={moveToWanttoReadList}
              moveToReadList={moveToReadList}
              deleteBookFromList={deleteBookFromList}
            />

        </div>
        <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <BookGrid
              books={readList}
              shelfName={shelfs[2]}
              moveToCurrReadingList={moveToCurrReadingList}
              moveToWanttoReadList={moveToWanttoReadList}
              moveToReadList={moveToReadList}
              deleteBookFromList={deleteBookFromList}
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

export default BookShelf
