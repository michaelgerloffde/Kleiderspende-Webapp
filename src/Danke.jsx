function Danke({ onNeu }) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-20">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Vielen Dank für Ihre Spende
      </h2>
      <p className="text-gray-700 mb-8 max-w-2xl">
        Ihre Registrierung wurde entgegengenommen. Sie erhalten in Kürze eine
        Bestätigung.
      </p>
      <button
        onClick={onNeu}
        className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700"
      >
        Zurück zur Startseite
      </button>
    </section>
  )
}

export default Danke