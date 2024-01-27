import { useState } from 'react'
import PropTypes from 'prop-types' // Import PropTypes
import './app.css'
import { toast } from 'react-toastify'

const Form = ({ addItem }) => {
  const [newItemName, setNewItemName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!newItemName) {
      toast.error('specify the item')
      return
    }
    addItem(newItemName)
    setNewItemName('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h4 className='title'>grocery bud</h4>
      <div className='form-control'>
        <input
          type='text'
          className='form-input'
          placeholder=' Start addding....'
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type='submit' className='btn-add'>
          add item
        </button>
      </div>
    </form>
  )
}

// Add prop type validation
Form.propTypes = {
  addItem: PropTypes.func.isRequired,
}

export default Form
