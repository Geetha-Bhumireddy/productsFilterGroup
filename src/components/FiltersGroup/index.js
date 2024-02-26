import {BsSearch} from 'react-icons/bs'
import './index.css'

const FiltersGroup = props => {
  const renderRatingsFilerList = () => {
    const {ratingsList} = props

    return ratingsList.map(rating => {
      const {changeRating, activeRatingId} = props
      const onClickRatingItem = () => changeRating(rating.ratingId)

      return (
        <li key={rating.ratingId} onClick={onClickRatingItem}>
          <img src={rating.imageUrl} alt={`rating ${rating.ratingId}`} />
          <p>& up</p>
        </li>
      )
    })
  }

  const renderCategoryList = () => {
    const {categoryOptions} = props
    return categoryOptions.map(category => {
      const {changeCategory, activeCategoryId} = props
      const onClickCategoryItem = () => changeCategory(category.categoryId)
      return (
        <li key={category.categoryId} onClick={onClickCategoryItem}>
          <p>{category.name}</p>
        </li>
      )
    })
  }

  const renderProductCategories = () => (
    <>
      <h1>Category</h1>
      <ul>{renderCategoryList()}</ul>
    </>
  )

  const onEnterSearchInput = event => {
    const {enterSearchInput} = props
    if (event.key === 'Enter') {
      enterSearchInput()
    }
  }

  const onChangeSearchInput = event => {
    const {changeSearchInput} = props
    changeSearchInput(event.target.value)
  }

  const renderSearhInput = () => {
    const {searchInput} = props
    return (
      <div>
        <input
          value={searchInput}
          type="search"
          placeholder="Search"
          onChange={onChangeSearchInput}
          onKeyDown={onEnterSearchInput}
        />
        <BsSearch />
      </div>
    )
  }
  const {clearAll} = props

  return (
    <div>
      {renderSearhInput()}
      {renderProductCategories()}
      {renderRatingsFilerList()}
      <button onClick={clearAll} type="button">
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
