import React from 'react';
import PropTypes from 'prop-types';

const categories = [{ id: 0, category: 'All' },
  { id: 1, category: 'Action' },
  { id: 2, category: 'Biography' },
  { id: 3, category: 'History' },
  { id: 4, category: 'Horror' },
  { id: 5, category: 'Kids' },
  { id: 6, category: 'Learning' },
  { id: 7, category: 'Sci-Fi' }];

const CategoryFilter = ({ changeFilter }) => {
  const options = categories.map(element => (
    <option key={element.id} value={element.category}>
      {element.category}
    </option>
  ));
  return (
    <div className="filter-wrapper">
      <span>Look by category: </span>
      <select name="categoryFilter" onChange={changeFilter}>
        {options}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};

export default CategoryFilter;
