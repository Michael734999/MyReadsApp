import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookList from './BookList'
import { Route } from 'react-router-dom'
import SearchBooks from './SearchBooks'

class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll()
    .then((books) => {
      this.setState(()=>({books}))
    })
  }

 changeShelf = (book, shelf) => {
   BooksAPI.update(book, shelf)
   .then((res) => {
     book.shelf = shelf
     this.setState((curState) => ({
       books: curState.books.filter(b => b.id !== book.id).concat( [book] )
     }))
   })
 }

  render() {
    const {books} = this.state
    return (
      <div className="app">
      <Route exact path='/' render={() => (
        <BookList onChangeShelf={this.changeShelf} books={books}/>
      )}/>
      <Route path='/search' render={() => (
        <SearchBooks 
        books={books} 
        onChangeShelf={this.changeShelf}/>
      )}/>
      </div>
    )
  }
}

export default BooksApp
