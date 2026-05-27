import { createRoot } from 'react-dom/client'
import './styles.css'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom"
import { CartProvider } from './pages/Order/CartContext.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <CartProvider>
   <App /> 
   </CartProvider>
  </BrowserRouter>
)
