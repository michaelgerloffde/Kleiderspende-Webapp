function Hero() {
  return (
    <section className="bg-blue-50 border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 py-12 md:py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Kleidung spenden – Sie entscheiden, wohin
        </h2>
        <p className="text-lg text-gray-700 mb-8 max-w-2xl">
          Registrieren Sie Ihre Kleiderspende in wenigen Schritten und wählen Sie
          selbst das Krisengebiet aus, in das Ihre Spende gehen soll.
        </p>
        <a href="#formular" className="inline-block bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700">
          Spende registrieren
        </a>
      </div>
    </section>
  )
}

export default Hero