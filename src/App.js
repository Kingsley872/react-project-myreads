import React from 'react';
import './App.css'
import * as BooksAPI from './BooksAPI'
import SearchPage from './SearchPage';
import BookShelf from './BookShelf'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
  }

  async componentDidMount() {
    const books = await BooksAPI.getAll();
    this.setState({ books })
  }

  moveBook = (targetBook, desShelf) => {
    BooksAPI.update(targetBook, desShelf).then(
      () => {
        targetBook.shelf = desShelf;
        this.setState((prevState) => ({
          // take out all books except the target and add it back to list with new shelf info
          books: prevState.books.filter((b) => b.title !== targetBook.title).concat([targetBook])
        }))
      })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <BookShelf
              books={this.state.books}
              bookOperation={this.moveBook}
            />
          )}
        />

      <Route path="/search" render={() => (
          <SearchPage
            books={this.state.books}
            bookOperation={this.moveBook}
            />
          )}
        />

      </div>
    )
  }
}

export default BooksApp
