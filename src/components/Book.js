import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, onClick, i }) => (
  <tr>
    <td colSpan="4">
      <div id={i === 0 ? 'first-book' : ''} className="book-tr">
        <span>{book.category}</span>
        <h2>{book.title}</h2>
        <button type="button" onClick={onClick}>Delete</button>
      </div>
    </td>
  </tr>
);

Book.propTypes = {
  book: PropTypes.instanceOf(Object).isRequired,
  onClick: PropTypes.func.isRequired,
  i: PropTypes.number.isRequired,
};

export default Book;
