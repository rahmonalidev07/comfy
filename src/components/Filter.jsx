import { Form, useLoaderData, Link } from "react-router-dom"

import FormInput from './FormInput'
import FormSelect from "./FormSelect"
import FormRange from "./FormRange"
import FormCheckbox from "./FormCheckbox"
function Filter() {
  const { meta, params } = useLoaderData()
  const { search, company, category, shipping, order, price } = params
  return (
    <Form className="bg-base-200 rounded-md px-3 py-4 grid gap-y-4 gap-x-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
      {/* Search */}
      <FormInput
        type="search"
        label="Search Product"
        name="search"
        size="input-md" 
      />
      {/* Category */}
      <FormSelect
        label="Select Category"
        name="category"
        defaultValue={category}
        list={meta.categories}
        size="input-md" 
      />
      {/* Company */}
      <FormSelect
        label="Select Company"
        name="company"
        defaultValue={company}
        list={meta.companies}
        size="input-md" 
      />
      {/* Sort by */}
      <FormSelect 
        label="Sort by"
        name="order"
        defaultValue={order}
        list={['a-z', 'z-h', 'high', 'low']}
        size="input-md"
      />
      {/* Price range */}
      <FormRange
        label="select Price"
        name="price"
        size="range-md"
        price={price}
      />
      {/* Shipping checkbox */} 
      <FormCheckbox
        label="Free shipping"
        name="shipping"
        size="input-sm"
        defaultValue={shipping}
      />
      {/* Buttons */}
      <button type="submit" className="btn btn-primary btn-sm">search</button>
      <Link top="/products" className="btn btn-accent btn-sm">reset</Link>
    </Form>
  )
}

export default Filter