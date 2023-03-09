import {AiOutlineSearch} from 'react-icons/ai'

import './index.css'

const FiltersGroup = props => {
  const {searchInput, clearAllFilters, changeSearchInput} = props

  const getProductsBySearchInput = e => changeSearchInput(e.target.value)

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const renderCategoryList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      const isActive = category.categoryId === activeCategoryId
      const categoryClassName = isActive
        ? `category-name active-category-name`
        : `category-name`

      return (
        <li
          className="category-item"
          key={category.categoryId}
          onClick={onClickCategoryItem}
        >
          <p className={categoryClassName}>{category.name}</p>
        </li>
      )
    })
  }

  const renderRatingFilter = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onClickRatingItem = () => changeRating(rating.ratingId)

      const ratingClassName =
        activeRatingId === rating.ratingId ? `and-up active-rating` : `and-up`

      return (
        <li
          className="rating-container-list"
          key={rating.ratingId}
          onClick={onClickRatingItem}
        >
          <img
            src={rating.imageUrl}
            alt={`rating ${rating.ratingId}`}
            className="rating-img"
          />
          <p className={ratingClassName}>& up</p>
        </li>
      )
    })
  }

  const getRatingFilter = () => (
    <>
      <h1>Rating</h1>
      <ul>{renderRatingFilter()}</ul>
    </>
  )

  const getCategoryList = () => (
    <>
      <h1>Category</h1>
      <ul>{renderCategoryList()}</ul>
    </>
  )

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          className="search-input"
          placeholder="search"
          value={searchInput}
          onChange={getProductsBySearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <AiOutlineSearch className="search-logo" />
      </div>

      {getCategoryList()}
      {getRatingFilter()}
      <button type="button" className="clear-button" onClick={clearAllFilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup

//           changeSearchInput={this.changeSearchInput}
