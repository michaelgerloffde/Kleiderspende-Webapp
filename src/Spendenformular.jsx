function Spendenformular() {
  return (
    <section id="formular" className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Spende registrieren</h2>

      <form className="max-w-2xl">

        <div className="mb-6">
          <label htmlFor="spendenart" className="block font-semibold mb-2">
            Art der Spende <span className="text-red-600">*</span>
          </label>
          <select id="spendenart" className="w-full border border-gray-300 rounded p-2">
            <option value="">Bitte wählen</option>
            <option value="uebergabe">Übergabe in der Geschäftsstelle</option>
            <option value="abholung">Abholung durch Sammelfahrzeug</option>
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="strasse" className="block font-semibold mb-2">
            Abholadresse
          </label>
          <input
            id="strasse"
            type="text"
            placeholder="Straße und Hausnummer"
            className="w-full border border-gray-300 rounded p-2 mb-3"
          />
          <div className="flex gap-3">
            <input
              id="plz"
              type="text"
              placeholder="PLZ"
              className="w-32 border border-gray-300 rounded p-2"
            />
            <input
              id="ort"
              type="text"
              placeholder="Ort"
              className="flex-1 border border-gray-300 rounded p-2"
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="kleidungsart" className="block font-semibold mb-2">
            Art der Kleidung <span className="text-red-600">*</span>
          </label>
          <select id="kleidungsart" className="w-full border border-gray-300 rounded p-2">
            <option value="">Bitte wählen</option>
          </select>
        </div>

        <div className="mb-8">
          <label htmlFor="krisengebiet" className="block font-semibold mb-2">
            Krisengebiet
          </label>
          <select id="krisengebiet" className="w-full border border-gray-300 rounded p-2">
            <option value="">Keine Präferenz</option>
          </select>
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700"
        >
          Weiter zur Bestätigung
        </button>

      </form>
    </section>
  )
}

export default Spendenformular