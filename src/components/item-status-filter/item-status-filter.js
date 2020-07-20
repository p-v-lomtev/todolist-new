import React from 'react';
import './item-status-filter.css'

const filterButtons = [
  { name: 'all', label: 'Все' },
  { name: 'active', label: 'Активные' },
  { name: 'done', label: 'Выполненые' }
];

const ItemStatusFilter = ({filter, onFilterChange = () => {}}) => {

  const buttons = filterButtons.map(({name, label}) => {
    const isActive = name === filter;
    const classNames = 'btn ' + (isActive ? 'btn-info' : 'btn-outline-secondary');

    return (
      <button key={name}
              type="button"
              onClick={() => onFilterChange(name)}
              className={classNames}>{label}</button>
    );
  });

  return (
    <div className="btn-group btn-group-m">
      { buttons }
    </div>
  );
};

export default ItemStatusFilter;