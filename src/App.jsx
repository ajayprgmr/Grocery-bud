import { useState } from 'react'
import { nanoid } from 'nanoid'
import Items from './items.jsx'
import Form from './form.jsx'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './app.css'
const getLocalStorage = () => {
  let data = localStorage.getItem('list')
  if (data) {
    data = JSON.parse(localStorage.getItem('list'))
  } else {
    data = []
  }
  console.log(data)
  return data
}

// const defaultList = JSON.parse(localStorage('list') || '[]') // one Liner for getLocalStorage
const setLocalStorage = (item) => {
  localStorage.setItem('list', JSON.stringify(item))
}

const App = () => {
  const [items, setItems] = useState(getLocalStorage())
  const addItem = (itemName) => {
    const newItem = {
      name: itemName,
      completed: false,
      id: nanoid(),
    }
    const newItems = [...items, newItem]
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item add successfully')
  }

  const removeItem = (key) => {
    const newItems = items.filter((item) => key !== item.id)
    setItems(newItems)
    setLocalStorage(newItems)
    toast.success('item deleted successfully')
  }
  const editItem = (itemId) => {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed }
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }
  return (
    <section className='section-center'>
      <ToastContainer autoClose={1000} />
      <Form addItem={addItem} />
      <Items items={items} removeItem={removeItem} editItem={editItem} />
    </section>
  )
}

export default App
