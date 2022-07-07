import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
  EmptyState,
} from '@shopify/polaris'
import { ResourcePicker } from '@shopify/app-bridge-react'
import { useState } from 'react'
import ProductList from '../components/ProductList'
import { useEffect } from 'react'

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState([])
  const [productsIds, setProductIds] = useState([])
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
          setIsOpen(false)
          setProducts(payload.selection)
        }}
        initialSelectionIds={productsIds}
      />
      {products.length > 0 ? (
        <Page
          title='Product Selector'
          primaryAction={{
            content: 'Select Product',
            onAction: () => {
              setIsOpen(true)
            },
          }}
        >
          <ProductList products={products} />
        </Page>
      ) : (
        <EmptyState
          heading='Manage the products you want to display'
          action={{
            content: 'Select Products',
            onAction: () => setIsOpen(true),
          }}
          image='https://cdn.shopify.com/s/files/1/0262/4071/2726/files/emptystate-files.png'
        >
          <p>Select the products you want to use on your banner.</p>
        </EmptyState>
      )}
    </>
  )
}
