import React from 'react'
import { Route } from 'wouter'
import Header from '@/components/Header.jsx'
import Home from '@/pages/Home.jsx'
import Detail from '@/pages/Detail.jsx'
import Cart from '@/pages/Cart.jsx'

function App () {
  return (
    <div className='App'>
      <Header />
      <Route path='/' component={Home} />
      <Route path='/dp/:id' component={Detail} />
      <Route path='/cart' component={Cart} />
    </div>
  )
}

export default App
