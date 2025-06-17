export interface IProduct {
  id: string
  title: string
  origin: string
  price: number // в копейках
  currency: 'RUB' | 'USD' | 'EUR'
  imageUrl: string
}
