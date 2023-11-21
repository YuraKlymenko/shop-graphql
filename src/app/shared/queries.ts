import {gql} from "apollo-angular";

export const GetCollectionsQuery = gql`
query getCollections
  {
    collections(options: { take: 10 }) {
      items {
        id
        name
        assets {
          source
        }
      }
    }
  }
`;

export const GetCollectionQuery = gql`
query GetCollection($id: ID, $slug: String) {
  collection(id: $id, slug: $slug) {
    id
    name
    slug
    description
    featuredAsset {
      ...Asset
    }
    breadcrumbs {
      id
      slug
      name
    }
    children {
      id
      slug
      featuredAsset {
        ...Asset
      }
      name
    }
  }
}

fragment Asset on Asset {
  id
  width
  height
  name
  preview
}
`

export const GetCollectionProductsQuery = gql`
query SearchProducts($input: SearchInput!) {
  search(input: $input) {
    items {
      productId
      slug
      productName
      description
      productAsset {
        id
        preview
      }
      priceWithTax {
        ... on PriceRange {
          min
          max
        }
      }
    }
    totalItems
    facetValues {
      count
      facetValue {
        id
        name
        facet {
            id
            name
        },
      }
    }
  }
}
`
