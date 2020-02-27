import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions/index';
import CategoryFilter from '../components/CategoryFilter';

class BooksList extends Component {
  handleFilterChange = event => {
    const { changeFilter } = this.props;
    changeFilter(event.target.value);
  }

  handleRemoveBook = id => {
    const { removeBook } = this.props;
    removeBook(id);
  }

  render() {
    let { books } = this.props;
    const { filter } = this.props;
    if (filter !== 'All') {
      books = books.filter(book => book.category === filter);
    }
    const booksArr = books.map((book, i) => (
      <Book book={book} i={i} key={book.id} onClick={() => this.handleRemoveBook(book.id)} />
    ));
    return (
      <div>
        <table>
          <thead className="header">
            <tr>
              <th id="title">Bookstore CMS</th>
              <th>Books</th>
              <th id="categories-title">Categories</th>
              <th id="user">
                <i className="fas fa-user" />
              </th>
            </tr>
          </thead>
          <tbody>
            {booksArr}
          </tbody>
        </table>
        <CategoryFilter changeFilter={this.handleFilterChange} />
      </div>
    );
  }
}

BooksList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
  removeBook: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

const mapStateToProps = state => ({
  books: state.books,
  filter: state.filter,
});

const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
  changeFilter: filter => dispatch(changeFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
