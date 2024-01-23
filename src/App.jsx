import { useState } from 'react'
import { nanoid } from 'nanoid'
import Items from './items.jsx'
import Form from './form.jsx'
import './app.css'
const App = () => {
  const [items, setItems] = useState([])
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    setItems((prevItems) => [...prevItems, newItem])
  }

  const removeItem = (key) => {
    const newItems = items.filter((item) => key !== item.id)
    setItems(newItems)
  }

  return (
    <section className='section-center'>
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} />
    </section>
  )
}

export default App
