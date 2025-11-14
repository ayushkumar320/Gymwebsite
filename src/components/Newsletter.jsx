function Newsletter() {
  return (
    <section className="py-20 px-5 text-center bg-gray-50">
      <h3 className="text-3xl font-semibold mb-8 text-gray-900">Join @fitboutique</h3>
      <div className="flex flex-col sm:flex-row justify-center gap-2.5 max-w-md mx-auto">
        <input
          type="email"
          placeholder="E-mail"
          className="flex-1 py-3.5 px-5 border border-gray-300 text-base outline-none focus:border-gray-900"
        />
        <button className="bg-gray-900 text-white border-none py-3.5 px-8 text-base font-semibold cursor-pointer transition-colors hover:bg-gray-800">
          Subscribe
        </button>
      </div>
    </section>
  )
}

export default Newsletter

