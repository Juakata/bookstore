import React from 'react';

const categories = [{ id: 1, category: 'Action' },
  { id: 2, category: 'Biography' },
  { id: 3, category: 'History' },
  { id: 4, category: 'Horror' },
  { id: 5, category: 'Kids' },
  { id: 6, category: 'Learning' },
  { id: 7, category: 'Sci-Fi' }];

const BooksForm = () => {
  const options = categories.map(element => <option key={element.id}>{element}</option>);
  return (
    <table>
      <form>
        <input type="text" placeholder="title" />
        <select>
          {options}
        </select>
      </form>
    </table>
  );
};

export default BooksForm;
