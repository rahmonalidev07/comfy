import ProductsList from "./ProductList"
import ProductsGrid from "./ProductsGrid"

import { useLoaderData } from "react-router-dom"

import { useState } from "react"

import { BsFillGridFill, BsList } from 'react-icons/bs'
 
function ProductsContainer() {
  const { meta } = useLoaderData()
  const totalProducts = meta.pagination.total
  
  const [layout, setLayout] = useState('grid')
  const setActiveStyles = (pattern) => {
    return `text btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-based-content'
    }`
  }
  return (
    <>
      <div className="flex justify-between items-center mt-8 border-b border-base-300 pb-5">
        <h4 className="font-medium text-md">{totalProducts} product{totalProducts > 1 && 's'}</h4>
        <div className="flex gap-x-2">
          <button type="button" className={setActiveStyles('grid')} onClick={() => setLayout('grid')}>
            <BsFillGridFill/>
          </button>
          <button type="button" className={setActiveStyles('list')} onClick={() => setLayout('list')}>
            <BsList/>
          </button>
        </div>
      </div>
      <div>
        {totalProducts === 0 ? (
            <h4 className="text-2xl mt-16">
              Sorry, no products matched your search... 
            </h4>
          ): layout === 'grid' ? (
            <ProductsGrid/>
          ): <ProductsList/>}
      </div>
    </>
  )
}

export default ProductsContainer