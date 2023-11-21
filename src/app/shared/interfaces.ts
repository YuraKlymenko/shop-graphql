export interface ICollection {
  id: number;
  name: string;
  assets: { source: string }[];
  slug: string;
  description: string;
  breadcrumbs: {
    id: number;
    slug: string;
    name: string;
  }[];
  children: {
    id: number;
    slug: string;
    name: string;
  }[]
}

export interface IProduct {
  productId: number;
  slug: string;
  productName: string;
  description: string;
  productAsset: {
    id: number;
    preview: string;
  };
  priceWithTax: {
    min: number;
    max: number;
  }
}

export interface IProductFilter {
  count: number;
  facetValue: {
    id: number;
    name: string;
    __typename: string;
    facet: {
      id: number;
      name: string;
    }
  }
}
