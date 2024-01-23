import { useState } from 'react'
import PropTypes from 'prop-types'
import './App.css'

const SingleItem = ({ item, removeItem }) => {
  const [completed, setCompleted] = useState(item.completed)

  const handleClick = () => {
    setCompleted(!completed) // toggle the completed status using setCompleted
  }

  return (
    <div className='sinlge-item'>
      <input
        type='checkbox'
        className='checkbox'
        checked={completed}
        onChange={handleClick}
      />
      <h6 className={completed ? 'name-status' : 'name'}>{item.name}</h6>
      <button className='btn' onClick={() => removeItem(item.id)}>
        delete
      </button>
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
}

export default SingleItem
