import Hero from '../components'
import { customFetch } from '../utils'
// components
import { FeaturedProducts } from '../components'

// url
const url = '/products?featured=true'

// loader
export const loader = async () => {
  const request = await customFetch(url)
  const products = request.data.data
  return { products }
}

function Landing() {
  return (
    <>
      <Hero/>
      <FeaturedProducts/>
    </>
  )
}

export default Landing