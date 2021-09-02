import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import Books from './Books'

class BookList extends Component {
    render() {
      const {books, onChangeShelf} = this.props; 

      let currentlyReading = books.filter(book => book.shelf === 'currentlyReading')
      let wantToRead = books.filter(book => book.shelf === 'wantToRead')
      let read = books.filter(book => book.shelf === 'read')

        return(<div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                { currentlyReading.map((book) => (
                  <Books key={book.id} book={book} books={books} onChangeShelf={onChangeShelf}/>
                ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                { wantToRead.map((book) => (
                  <Books key={book.id} book={book} books={books} onChangeShelf={onChangeShelf}/>
                ))}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                { read.map((book) => (
                  <Books key={book.id} book={book} books={books} onChangeShelf={onChangeShelf}/>
                ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
        <Link to='/search'>
          <button>Add a book</button>
        </Link>
        </div>
      </div>)
  }
}

export default BookList