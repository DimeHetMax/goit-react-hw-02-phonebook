import React from 'react';

export class Filter extends React.Component {
  render() {
    const { filter, handleFilterChange } = this.props;

    return (
      <input
        type="text"
        name="filter"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Search by name"
      />
    );
  }
}



