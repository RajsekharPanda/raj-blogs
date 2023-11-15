import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Pagination from './components/Pagination'
import Blogs from './components/Blogs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App
