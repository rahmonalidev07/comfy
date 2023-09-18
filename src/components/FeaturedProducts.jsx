import SectionTitle from "./SectionTitle"
import ProductsGrid from "./ProductsGrid"


function FeaturedProducts() {
  return (
    <div className='align-elements pt-24'>
        <SectionTitle text="Featured Products"/>
        <ProductsGrid/>
    </div>
  )
}

export default FeaturedProducts