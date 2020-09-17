import React, { Component } from 'react' ;
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import BookGrid from './BookGrid'
import * as Constants from './Constants'
import PropTypes from 'prop-types'

class SearchPage extends Component {
  state = {
    value: '',
    searchedBooks: []
  }

  handleChange = e => {
    this.setState (
      { value: e.target.value }
    )
  }

  handleOnKeyDown = e => {
    if (e.key === 'Enter'){
      if (Constants.SEARCH_TERMS.includes(this.state.value.toLowerCase())) {
        this.searchBooks();
      } else {
        alert("Can't not apply this Search Term")
      }
    }
  }

  componentDidMount = () => {
    this.setState(
      {
        value: '',
        searchedBooks: []
      }
    )
  }

  searchBooks = () => {
    BooksAPI.search(this.state.value).then( searchedBooks => {
      this.setState ({ searchedBooks });
    })
  }

  render() {
    const {
      bookOperation
    } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            to="/"
            className="close-search"
            >Close
          </Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              onChange={this.handleChange}
              onKeyDown={this.handleOnKeyDown} />

          </div>
        </div>
        <div className="search-books-results">
            <BookGrid
              books={this.state.searchedBooks}
              shelfName='searchedBooks'
              bookOperation={bookOperation}
            />
        </div>
      </div>
    );
  };
};

SearchPage.propTypes = {
  bookOperation: PropTypes.func.isRequired 
}

export default SearchPage;
