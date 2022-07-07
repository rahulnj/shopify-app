import { ResourceList, Stack, TextStyle, Thumbnail } from '@shopify/polaris'

const ProductItem = ({ product }) => {
  const media = <Thumbnail source={product.images[0].originalSrc} />
  return (
    <ResourceList.Item
      id={product.id}
      accessibilityLabel={`View details for ${product.title}`}
      media={media}
    >
      <Stack>
        <Stack.Item fill>
          <h4>
            <TextStyle>{product.title}</TextStyle>
          </h4>
        </Stack.Item>
        <Stack.Item>
          <p>
            <TextStyle variation='subdued'>
              {product.variants[0].price}
            </TextStyle>
          </p>
        </Stack.Item>
      </Stack>
    </ResourceList.Item>
  )
}

export default ProductItem
