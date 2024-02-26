import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from './pages/home'
import ProductsPage from './pages/products'
import DetailProductsPage from './pages/detailProducts'
import LoginForm from './pages/auth/login'
import RegistrationForm from './pages/auth/register'
import ProfilePage from './pages/profiles'
import CartPage from './pages/cart'
import EditProfile from './pages/profiles/edit'
import NotFoundPage from './pages/notfound'

function App() {
  return (
    // <div className='text-3xl font-bold underline'>App</div>
    <BrowserRouter>
      <Routes>
        <Route path='/' exact element={<HomePage />} />
        <Route path='/products' element={<ProductsPage />} />
        <Route path='/products/:id' element={<DetailProductsPage />} />
        <Route path='/login' element={<LoginForm />} />
        <Route path='/register' element={<RegistrationForm />} />
        <Route path='/profiles' element={<ProfilePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/profiles/edit' element={<EditProfile />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App