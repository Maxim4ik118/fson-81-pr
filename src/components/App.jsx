import { Component } from 'react';
import books from '../data/books.json';
import BookList from './BookList/BookList';
import BookForm from './BookForm/BookForm';

export class App extends Component {
  state = {
    books: books.books,
  };

  onDeleteBook = bookId => {
    this.setState({
      books: this.state.books.filter(book => book.id !== bookId),
    });
  };

  render() {
    console.log(this.state.books);
    return (
      <div className="container">
        <BookForm />
        <BookList books={this.state.books} onDelete={this.onDeleteBook} />
      </div>
    );
  }
}
