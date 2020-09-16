import React, { Component } from 'react'
import Book from './Book'

class BookGrid extends Component {
  render() {
    const {
      books,
      shelfName,
      moveToCurrReadingList,
      moveToWanttoReadList,
      moveToReadList,
      deleteBookFromList
    } = this.props;

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {
            books.map( book => (
              <Book
                book={book}
                shelfName={shelfName}
                moveToCurrReadingList={moveToCurrReadingList}
                moveToWanttoReadList={moveToWanttoReadList}
                moveToReadList={moveToReadList}
                deleteBookFromList={deleteBookFromList}
              />
            ))
          }
        </ol>
      </div>
    )
  }
}

export default BookGrid
