import React, { Component } from 'react' ;
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI'
import BookGrid from './BookGrid'
import * as Constants from './Constants'
import PropTypes from 'prop-types'
import { Debounce } from 'react-throttle'

class SearchPage extends Component {
  state = {
    value: '',
    searchedBooks: []
  }

  handleChange = e => {
    this.setState ({ value: e.target.value })
    if (Constants.SEARCH_TERMS.includes(this.state.value.toLowerCase())) {
        this.searchBooks();
    } else {
      this.setState(()=> ({ searchedBooks: [] }));
    }
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

            <Debounce time="500" handler="onChange" >
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={this.handleChange}
                />
            </Debounce>

          </div>
        </div>
        <div className="search-books-results">
            <BookGrid
              books={this.state.searchedBooks}
              shelfName='none'
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
