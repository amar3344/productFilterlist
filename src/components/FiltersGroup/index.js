import {useState} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './index.css'

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]

const FiltersGroup = props => {
  const {productsList} = props
  const [searchInput, setSearchInput] = useState('')
  const getProductsBySearchInput = e => {
    setSearchInput(e.target.vale)
  }

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={getProductsBySearchInput}
        />
        <AiOutlineSearch className="search-logo" />
      </div>
      <ul className="category-container">
        <li>
          <h1>Category</h1>
        </li>
        {categoryOptions.map(item => (
          <li>{item.name}</li>
        ))}
        <li>
          <h1>Rating</h1>
        </li>
        {ratingsList.map(item => (
          <li className="rating-container-list">
            <img src={item.imageUrl} alt={item.ratingId} />
            <span>&up</span>
          </li>
        ))}
      </ul>
      <button type="button" className="clear-button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
