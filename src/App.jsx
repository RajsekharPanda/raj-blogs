import { useContext, useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import Pagination from './components/Pagination'
import Blogs from './components/Blogs'
import { AppContext } from './context/AppContext'

function App() {
  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(() => {
    fetchBlogPosts();
  },[]);

  return (
    <div className='w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Header/>
      <Blogs/>
      <Pagination/>
    </div>
  )
}

export default App
