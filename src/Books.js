import React, {Component} from 'react'
import ShelfManager from './ShelfManager'
import StarRating from './StarRating'

class Books extends Component {

    render() {
      const {book, books, onChangeShelf} = this.props
        return(
            <li key={book.title}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks ? `url(${book.imageLinks.thumbnail})` :  ''}}></div>
                <ShelfManager book={book} books={books} onChangeShelf={onChangeShelf}/>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors}</div>
              <StarRating/>
            </div>
          </li>
          )
    }
}

export default Books