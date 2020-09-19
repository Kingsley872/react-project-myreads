import React from 'react'
import Book from './Book'

const BookGrid = (props) => (
  <div className="bookshelf-books" key={props.index}>
    <ol key={props.shelfName} className="books-grid">
      {
        props.books.map((book, i) => (
          <Book
            book={book}
            shelfName={props.shelfName}
            bookOperation={props.bookOperation}
            key={i}
          />
        ))
      }
    </ol>
  </div>
)

export default BookGrid
