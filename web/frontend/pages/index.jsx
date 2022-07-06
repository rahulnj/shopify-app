import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from '@shopify/polaris'
import { ResourcePicker } from '@shopify/app-bridge-react'
import { useState } from 'react'

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [products, setProducts] = useState([])
  return (
    <Page
      title='Product Selector'
      primaryAction={{
        content: 'Select Product',
        onAction: () => {
          setIsOpen(true)
        },
      }}
    >
      <ResourcePicker
        resourceType='Product'
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        onSelection={(payload) => {
          setIsOpen(false)
          console.log(payload)
          setProducts(payload.selection)
        }}
      />
      {products.map((product) => (
        <div>{product.title}</div>
      ))}
    </Page>
  )
}
