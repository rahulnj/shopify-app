import { ResourcePicker } from '@shopify/app-bridge-react'
import { useState } from 'react'
import { useEffect } from 'react'
import ProductPage from '../components/ProductPage'
import ProductEmptyState from '../components/ProductEmptyState'
// import storeLegacy from 'store-js'
export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [productsIds, setProductIds] = useState([])

  const handleProductSelection = (payload) => {
    setIsOpen(false)
    setProducts(payload.selection)
    localStorage.setItem(
      'unbox-test-store-8888.myshopify.com-products',
      JSON.stringify(payload.selection)
    )
  }
  useEffect(() => {
    const ProductList = JSON.parse(
      localStorage.getItem('unbox-test-store-8888.myshopify.com-products')
    )
    setProducts(ProductList)
  }, [])

  useEffect(() => {
    const ids = products.map((product) => {
      return {
        id: product.id,
      }
    })
    setProductIds(ids)
  }, [products])
  return (
    <>
      <ResourcePicker
        resourceType='Product'
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelection={(payload) => {
          handleProductSelection(payload)
        }}
        initialSelectionIds={productsIds}
      />
      {products.length > 0 ? (
        <ProductPage setIsOpen={setIsOpen} products={products} />
      ) : (
        <ProductEmptyState setIsOpen={setIsOpen} />
      )}
    </>
  )
}
