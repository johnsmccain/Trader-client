import React from 'react'
import { BsSearch } from 'react-icons/bs';
import { INPUT } from '../../components';
import './search.scss';
const Search = () => {
  return (
    <div className='search'>
        <div className="search__input">
            <INPUT startIcon={<BsSearch/>}/>
        </div>
        <div className="search__header">
            <div className="left">
                Recent
            </div>
            <span className="btn">
                Clear All
            </span>
        </div>
    </div>
  )
}

export default Search