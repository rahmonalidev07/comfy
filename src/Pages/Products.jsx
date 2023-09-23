import Filter from "../components/Filter"

const url = '/products'
export const loader = async ({ request }) => {
  
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries()
  ])
  const response = await customFetch(url, {
    params
  });
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, params, meta };
};

import { ProductContainer, PaginationContainer } from "../components"

import { customFetch } from "../utils"
function Products() {
  return (
    <div className="align-elements py-20">
      <Filter/>
      <ProductContainer/>
      <PaginationContainer/>
    </div>
  )
}

export default Products