import React, { Component } from 'react';
import { addBook } from '../actions/index';
import { connect } from 'react-redux';

const categories = [{ id: 1, category: 'Action' },
{ id: 2, category: 'Biography' },
{ id: 3, category: 'History' },
{ id: 4, category: 'Horror' },
{ id: 5, category: 'Kids' },
{ id: 6, category: 'Learning' },
{ id: 7, category: 'Sci-Fi' }];

class BooksForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      category: categories[0].category,
    }
  }

  handleChange = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { ...this.state, id: 1 };
    const { addBook } = this.props;
    addBook(newBook);
    this.setState({ title: null, category: categories[0].category })
  }

  render() {
    const options = categories.map(element => <option key={element.id}>{element.category}</option>);
    return (
      <div>
        <form>
          <input type="text" name="title" placeholder="title" onChange={this.handleChange} />
          <select name="category" onChange={this.handleChange}>
            {options}
          </select>
          <button type="button" onClick={this.handleSubmit}>Submit</button>
        </form >
        <div>{this.state.title}</div>
        <div>{this.state.category}</div>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addBook: book => { dispatch(addBook(book)) }
});

export default connect(null, mapDispatchToProps)(BooksForm);
