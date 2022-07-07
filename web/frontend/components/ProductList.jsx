import { Card, ResourceList } from '@shopify/polaris'

import ProductItem from './ProductItem'

const ProductList = ({ products }) => {
  return (
    <Card>
      <ResourceList
        showHeader
        resourceName={{ singular: 'Product', plural: 'Products' }}
        items={products}
        renderItem={(product) => {
          return <ProductItem product={product} key={product.id} />
        }}
      />
    </Card>
  )
}

export default ProductList
