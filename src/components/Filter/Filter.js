/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';

import './Filter.scss';

const Filter = ({ filters, onChange, selected }) => {
  const [isShown, switchMenu] = useState(false);
  const onClick = () => {
    switchMenu(!isShown);
  };
  return (
    <div className="dropdownContainer">
      <div className="dropdown" onClick={onClick} >
        <span className="filterTitle">Игры: </span>{selected}
        { isShown && (
          <ul>
            {filters.map(filter => <li key={uniqid.time()}>
              <button onClick={() => {
                switchMenu(false);
                onChange(filter);
              }}>
                {filter}
              </button>
            </li>)}
            <li key={uniqid.time()}>
              <button onClick={() => {
                switchMenu(false);
                onChange('Все');
              }}>
                Все
              </button>
            </li>
          </ul>
        )
      }
      </div>
    </div>
  );
};

export default Filter;

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
};
