import React from 'react'
import Book from './Book'

const BookGrid = (props) => (
  <div className="bookshelf-books">
    <ol className="books-grid">
      {
        props.books.map( book => (
          <Book
            book={book}
            shelfName={props.shelfName}
            bookOperation={props.bookOperation}
          />
        ))
      }
    </ol>
  </div>
)

export default BookGrid
