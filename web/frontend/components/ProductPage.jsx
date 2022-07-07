import { Page } from '@shopify/polaris'
import ProductList from './ProductList'
const ProductPage = ({ setIsOpen, products }) => {
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
      <ProductList products={products} />
    </Page>
  )
}

export default ProductPage
