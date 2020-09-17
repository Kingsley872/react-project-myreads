import React from 'react';
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'

import SearchPage from './SearchPage';
import BookShelf from './BookShelf'

import { Route } from 'react-router-dom'

const tempBooks = [
  [
    {
      title: 'To Kill a Mockingbird',
      authors: 'Harper Lee',
      imageLinks: {
        thumbnail: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api'
      }
    }
  ],
  [
    {
      title: 'Ender\'s Game',
      authors: 'Orson Scott Card',
      imageLinks: {
        thumbnail: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api'
      }
    }
  ],
  [
    {
      title: 'The Hobbit',
      authors: 'J.R.R',
      imageLinks: {
        thumbnail: 'http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api'
      }
    }
  ]
]

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    // books: tempBooks,
    books: [],
    currList: tempBooks[0],
    wantList: tempBooks[1],
    readList: tempBooks[2],
  }

  componentDidMount = () => {
    BooksAPI.getAll().then( books => {
      this.setState( () => ({ books }));
    })


  }

  moveToCurrReadingList = book => {
    this.setState( prevState => ({
      currList: [...prevState.currList, book]
    }))
  }
  moveToWanttoReadList = book => {
    this.setState( prevState => ({
      wantList: [...prevState.wantList, book]
    }))
  }
  moveToReadList = book => {
    this.setState( prevState => ({
      readList: [...prevState.readList, book]
    }))
  }
  deleteBookFromList = (nobook, shelfName ) => {
    let newList = [];
    switch (shelfName) {
      case 'Currently Reading':
        newList = this.state.currList.filter(book=>(book.title !== nobook.title));
        this.setState( prevState => ({
            currList: [...newList]
          }));
        break;
      case 'Want to Read':
        newList = this.state.wantList.filter(book=>(book.title !== nobook.title));
        this.setState( prevState => ({
            wantList: [...newList]
          }));
        break;
      case 'Read':
        newList = this.state.readList.filter(book=>(book.title !== nobook.title));
        this.setState( prevState => ({
            readList: [...newList]
          }))
        break;
      default:
        break;
    }
  }


  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
            <BookShelf
              currList={this.state.currList}
              wantList={this.state.wantList}
              readList={this.state.readList}
              moveToCurrReadingList={this.moveToCurrReadingList}
              moveToWanttoReadList={this.moveToWanttoReadList}
              moveToReadList={this.moveToReadList}
              deleteBookFromList={this.deleteBookFromList}
            />
          )}
        />
      {JSON.stringify(this.state.books[0])}

      <Route path="/search" render={() => (
          <SearchPage
              moveToCurrReadingList={this.moveToCurrReadingList}
              moveToWanttoReadList={this.moveToWanttoReadList}
              moveToReadList={this.moveToReadList}
            />
        )} />

      </div>
    )
  }
}

export default BooksApp
