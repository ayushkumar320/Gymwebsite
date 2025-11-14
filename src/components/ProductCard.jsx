function ProductCard({ product }) {
  return (
    <div className="text-center transition-transform hover:-translate-y-1">
      <div className="w-full h-[300px] bg-gray-100 mb-5 overflow-hidden rounded">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-2xl font-semibold mb-2.5 text-gray-900">{product.name}</h3>
      <p className="text-[15px] text-gray-600 leading-relaxed mb-5">{product.description}</p>
      <button className="bg-transparent text-gray-900 border-2 border-gray-900 py-3 px-8 text-sm font-semibold cursor-pointer transition-all uppercase tracking-wider hover:bg-gray-900 hover:text-white">
        {product.name}
      </button>
    </div>
  )
}

export default ProductCard

