import { IProduct } from 'product/product.type'
import { FC } from 'react'
import './product.css'

interface IProps {
  product: IProduct
}

export const ProductCard: FC<IProps> = ({ product }) => {
  const formattedPrice = new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: product.currency,
    minimumFractionDigits: 2,
  }).format(product.price / 100)

  return (
    <div className="card">
      <img src={product.imageUrl} alt={product.title} className="card__image" />
      <div className="card__info">
        <h2 className="card__title">{product.title}</h2>
        <p className="card__origin">Страна: {product.origin}</p>
        <p className="card__price">{formattedPrice}</p>
        <button className="card__button">В корзину</button>
      </div>
    </div>
  )
}
