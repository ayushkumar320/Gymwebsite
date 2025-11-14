function AsSeenIn() {
  return (
    <section className="py-20 px-5 text-center bg-white">
      <h3 className="text-2xl font-semibold mb-10 text-gray-600">As seen in</h3>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {[...Array(14)].map((_, i) => (
          <div key={i} className="py-4 px-8 bg-gray-100 rounded text-sm font-medium text-gray-600">
            FitBoutique
          </div>
        ))}
      </div>
    </section>
  )
}

export default AsSeenIn

