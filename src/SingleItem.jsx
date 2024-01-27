import PropTypes from 'prop-types'
import './App.css'

const SingleItem = ({ item, removeItem, editItem }) => {
  return (
    <div className='sinlge-item'>
      <input
        type='checkbox'
        className='checkbox'
        checked={item.completed}
        onChange={() => editItem(item.id)}
      />
      <h6 className={item.completed ? 'name-status' : 'name'}>{item.name}</h6>
      <div className='delete-btn-container'>
        <button className='btn' onClick={() => removeItem(item.id)}>
          delete
        </button>
      </div>
    </div>
  )
}

// Add prop type validation
SingleItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
  removeItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
}

export default SingleItem
