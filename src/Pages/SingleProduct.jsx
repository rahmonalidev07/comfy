// rrd
import { useLoaderData, Link } from "react-router-dom"

// utils
import { formatPrice, customFetch, generateAmountOptions } from "../utils"

// hooks
import { useState } from "react"

export const loader = async ({ params }) => {
  const request = await customFetch(`/products/${params.id}`)
  return { product: request.data.data }
}
function SingleProduct() {
  const { product } = useLoaderData()
  const { image, title, price, description, colors, company } = product.attributes
  const dollarAmount = formatPrice(price)
  const [productColor, setProductColor] = useState(colors[0])
  const [amount, setAmount] = useState(1)

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value))
  }
  return (
    <section className='align-elements py-20'>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <div className="grid mt-6 gap-y-8 lg:grid-cols-2 lg:w-full lg:gap-x-6">
          <img src={image} alt="" className="w-96 h-96 object-cover rounded-lg lg:w-full" />
          <div>
            <h1 className="capitalize text-3xl font-bold">{title}</h1>
            <h3 className="mt-3 text-neutral-content tracking-wider capitalize">{company}</h3>
            <p className="mt-3 text-xl">{dollarAmount}</p>
            <p className="mt-6 leading-8 mb-8">{description}</p>
          <div className="form-control w-full max-w-xs">
              <h4 className="flex flex-col gap-y-5 text-md font-medium tracking-wider capitalize">
                <span>Colors:</span>
                <span>
                  {colors.map((color) => {
                    return (
                      <button
                        key={color}
                        type="button"
                        className={`badge h-6 w-6 mr-2 ${
                          color === productColor && "border-2 border-secondary"
                        }`}
                        style={{ background: color }}
                        onClick={() => {
                          setProductColor(color);
                        }}
                      ></button>
                    );
                  })}
                </span>
              </h4>
            </div>
            <div className="form-control">
              <label htmlFor="" className="label">
                <h4 className="text-md font-medium tracking-wider capitalize">
                  Amount:
                </h4>
              </label>
              <select
                name=""
                id="amount"
                onChange={handleAmount}
                value={amount}
                className="select select-secondary select-bordered select-md"
              >
                {generateAmountOptions(15)}
              </select>
            </div>
            <div className="mt-10">
              <button className="btn btn-secondary btn-md">Add to bag</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SingleProduct