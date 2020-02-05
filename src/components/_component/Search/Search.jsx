import React from 'react';
import { Input } from 'antd';

import './search.scss';

const Search = ({ changeValue, ...props }) => {
  const { Search } = Input;
  return (
    <div className="parents__search">
      <Search
        className="page-point__search"
        placeholder="Поиск контактов"
        onChange={(e) => changeValue(e.target.value)} />
    </div>
  )
}


export default Search;
