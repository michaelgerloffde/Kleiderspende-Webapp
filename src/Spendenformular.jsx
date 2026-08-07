import { useState } from "react";
import { kleidungsarten, krisengebiete, empfehlungen } from "./Listen";

// Empfehlung Krisengebiet
function Spendenformular({ onWeiter }) {
  const [kleidungsart, setKleidungsart] = useState("");
  const [spendenart, setSpendenart] = useState("");

  return (
    <section id="formular" className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Spende registrieren
      </h2>

      <form className="max-w-2xl">
        <div className="mb-6">
          <label htmlFor="spendenart" className="block font-semibold mb-2">
            Art der Spende <span className="text-red-600">*</span>
          </label>
          <select
            id="spendenart"
            // EIngabe an zustand binden
            value={spendenart}
            onChange={(e) => setSpendenart(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="">Bitte wählen</option>
            <option value="uebergabe">Übergabe in der Geschäftsstelle</option>
            <option value="abholung">Abholung durch Sammelfahrzeug</option>
          </select>
        </div>
        {/* Ändern div / fieldset und implement disable */}
        <fieldset disabled={spendenart !== "abholung"}  className="mb-6">
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
        </fieldset>

        {/* Eingabe kleidungsart */}
        <div className="mb-6">
          <label htmlFor="kleidungsart" className="block font-semibold mb-2">
            Art der Kleidung <span className="text-red-600">*</span>
          </label>
          {/*Hinweis für häufigsten Use-Case*/}

          <p className="text-sm text-gray-600 mb-2">
            Wählen Sie „Mix“, wenn Ih re Spende mehrere Kleidungsarten enthält.
          </p>

          <select
            id="kleidungsart"
            value={kleidungsart} 
            // Eingabe an Zustand binden
            onChange={(e) => setKleidungsart(e.target.value)} 
            className="w-full border border-gray-300 rounded p-2"
          >
            <option value="">Bitte wählen</option>

            {/* Einbetten der Auswahlmöglichkeiten kleidungsart*/}
            {kleidungsarten.map((art) => (
              <option key={art} value={art}>
                {art}
              </option>
            ))}
          </select>
        </div>



      <p>neu: {kleidungsart}</p>

        {/* Eingabe Krisengebiet - Fieldset statt div */}
        <fieldset className="mb-8">
          <legend className="block font-semibold mb-2">Krisengebiet</legend>
        
        {/* Empfehlung Krisengebiet */}
          {empfehlungen[kleidungsart] && (
            <p className="text-sm text-blue-700 bg-blue-50 border border-blue-200 rounded p-3 mb-3">
              Auf Grundlage Ihrer Angabe zu Kleidungsart empfehlen wir{" "}
              {empfehlungen[kleidungsart]}. Die Auswahl liegt weiterhin bei
              Ihnen.
            </p>
          )}

          {krisengebiete.map((gebiet) => (
            <div key={gebiet} className="flex items-center gap-2 mb-2">
              <input
                id={gebiet}
                type="radio"
                name="krisengebiet"
                value={gebiet}
                className="w-4 h-4"
              />
              <label htmlFor={gebiet}>{gebiet}</label>
            </div>
          ))}
        </fieldset>

        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700"
        >
          Weiter zur Bestätigung
        </button>
      </form>
    </section>
  );
}

export default Spendenformular;
