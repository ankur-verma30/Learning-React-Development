import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
// import About from './Components/About';
import React from 'react';
import './App.css';
import { Navbar } from './Components/Navbar';
import { OrderSummary } from './Components/OrderSummary';
import NoMatch from './Components/NoMatch';
import { Products } from './Components/Products';
import { FeaturedProducts } from './Components/FeaturedProducts';
import { NewProducts } from './Components/NewProducts';
import { Users } from './Components/Users';
import { UserDetails } from './Components/UserDetails';
import { Profile } from './Components/Profile';
import { UserAdmin } from './Components/UserAdmin';
import { AuthProvider } from './Components/auth';
import { Login } from './Components/Login';


const LazyAbout = React.lazy(() => import('./Components/About'))

function App() {
  return (
    <AuthProvider>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='about' element={<React.Suspense fallback='...Loading'><LazyAbout /></React.Suspense>} />
          <Route path='order-summary' element={<OrderSummary />} />
          <Route path='products' element={<Products />} >
            <Route index element={<FeaturedProducts />} />
            <Route path='featured-products' element={<FeaturedProducts />} />
            <Route path='new-products' element={<NewProducts />} />
          </Route>
          <Route path='users' element={<Users />} >
            <Route path=':userId' element={<UserDetails />} />
            <Route path='admin' element={<UserAdmin />} />
          </Route>
          <Route path='*' element={<NoMatch />} />
          <Route path='profile' element={<Profile />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </>
    </AuthProvider>
  );
}

export default App;
