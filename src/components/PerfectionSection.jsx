import { products } from '../data/products'

function PerfectionSection() {
  return (
    <section className="py-24 px-5 text-center bg-gray-50">
      <h2 className="text-4xl md:text-3xl sm:text-2xl font-bold mb-10 text-gray-900">
        Where Pilates Meets Perfection.
      </h2>
      <div>
        <h3 className="text-3xl font-semibold mb-10 text-gray-900">Best Reformer Pilates</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {products.slice(0, 4).map((product) => (
            <div key={product.id} className="text-center">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-[250px] object-cover rounded mb-4 bg-gray-100"
              />
              <span className="block text-base font-medium text-gray-900">{product.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PerfectionSection

