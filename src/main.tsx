import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ProductCard } from './product/ProductCard'
import './main.css'
import { product } from './product/product.mock'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <main className="main">
      <ProductCard product={product} />
    </main>
  </StrictMode>
)
