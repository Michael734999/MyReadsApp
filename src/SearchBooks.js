import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Books from './Books'
import './App.css'

class SearchBooks extends Component {
    static propTypes = {
    }
    state = {
        query: '',
        search: []
    }
 
    updateQuery = query => {
        this.setState(() => ({
            query: query,
        }))
        if(query !== '') {
          BooksAPI.search(query.trim(), 20)
          .then(book => {
            book.length > 1
            ? this.setState({search: book})
            : this.setState({search: []})
          })
        } else {
          this.setState({search: [], query: ''})
        }
    }

    render() {
        return(
            <div className="search-books">
            <div className="search-books-bar">
            <Link to='/'>
              <button className="close-search">Close</button>
            </Link>  
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author" 
                value={this.state.query} 
                onChange={e => this.updateQuery(e.target.value)}/>
              </div>
            </div>
            <div className="search-books-results">
            <div className='result-search'>
            <h4>Showing Results: {this.state.search.length} Books</h4>
            </div>
              {<ol className="books-grid">
                {this.state.search.map((book) => (
                  <Books key={book.id} book={book} books={this.props.books} onChangeShelf={this.props.onChangeShelf}/>
                ))}
              </ol>}

            </div>
          </div>
        )
    }
}

export default SearchBooks