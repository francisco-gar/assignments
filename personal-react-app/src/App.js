import React from 'react'
import Header from './Header'
import MainView from './MainView'
import Nav from './Nav'

import './App.css'



function App() {
  return (
    <div className='bodywrap'>
      <Header />
      <Nav />
      <MainView />
    </div>
  )
}

export default App
