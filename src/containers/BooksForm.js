import React from 'react';

const categories = [{ id: 1, category: 'Action' },
  { id: 2, category: 'Biography' },
  { id: 3, category: 'History' },
  { id: 4, category: 'Horror' },
  { id: 5, category: 'Kids' },
  { id: 6, category: 'Learning' },
  { id: 7, category: 'Sci-Fi' }];

// const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

const BooksForm = () => {
  const options = categories.map(element => <option key={element.id}>{element.category}</option>);
  return (
    <form>
      <input type="text" placeholder="title" />
      <select>
        {options}
      </select>
      <button type="button">Submit</button>
    </form>
  );
};

export default BooksForm;
