import { useState } from "react";
import { kleidungsarten, krisengebiete, empfehlungen, geschaeftsstellen } from "./Listen";

//Zustand anlegen - Empfehlung Krisengebiet
function Spendenformular({ onWeiter }) {
  const [kleidungsart, setKleidungsart] = useState("");
  const [spendenart, setSpendenart] = useState("");
  // Pflichtfeldprüfung
  const [klingel, setKlingel] = useState("");
  const [klingelFehler, setKlingelFehler] = useState("");

  const [strasse, setStrasse] = useState("");
  const [strasseFehler, setStrasseFehler] = useState("");

  const [plz, setPlz] = useState("");
  const [plzFehler, setPlzFehler] = useState("");

  const [ort, setOrt] = useState("");
  const [ortFehler, setOrtFehler] = useState("");

  // Prüffunktionen
  function pruefeKlingel() {
    if (klingel.trim() === "") {
      setKlingelFehler("Bitte geben Sie den Namen an der Klingel an.");
    } else {
      setKlingelFehler("");
    }
  }
  function pruefeStrasse() {
    if (strasse.trim() === "") {
      setStrasseFehler("Bitte geben Sie Ihre Straße und Hausnummer an.");
    } else {
      setStrasseFehler("");
    }
  }
  // FUnktion Plz-Plausibilitätprüfung
  function pruefePlz() {
    if (plz.trim() === "") {
      setPlzFehler("Bitte geben Sie Ihre Postleitzahl an.");
      return;
    } 
    if (plz.length !== 5){
      setPlzFehler("Die eingegebene Postleitzzahl ist ungültig")
      return;
    }
      if (plz.substring(0, 2) !== geschaeftsstellen[0].plz.substring(0, 2)) {
      setPlzFehler("Diese Postleitzahl liegt außerhalb des Abholgebiets.");
      return;
    }
    setPlzFehler("")
  }
  function pruefeOrt() {
    if (ort.trim() === "") {
      setOrtFehler("Bitte geben Sie Ihren Wohnort an.");
    } else {
      setOrtFehler("");
    }
  }

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
        <fieldset disabled={spendenart !== "abholung"} className="mb-6">
          <label htmlFor="strasse" className="block font-semibold mb-2">
            Abholadresse
          </label>

          {/* Pflichfelprüfungen */}
          {klingelFehler && (
            <p className="text-sm text-red-600 mb-1">{klingelFehler}</p>
          )}
          
          <input
            id="klingel"
            type="text"
            value={klingel}
            onChange={(e) => setKlingel(e.target.value)}
            onBlur={pruefeKlingel}
            placeholder="Name an der Klingel"
            className="w-full border border-gray-300 rounded p-2 mb-3"
          />
          {strasseFehler && (
            <p className="text-sm text-red-600 mb-1">{strasseFehler}</p>
          )}
          <input
            id="strasse"
            type="text"
            value={strasse}
            onChange={(e) => setStrasse(e.target.value)}
            onBlur={pruefeStrasse}
            placeholder="Straße und Hausnummer"
            className="w-full border border-gray-300 rounded p-2 mb-3"
          />

          <div className="flex gap-3">
            <div>
            {plzFehler && (
              <p className="text-sm text-red-600 mb-1">{plzFehler}</p>
            )}

            <input
              id="plz"
              type="text"
              value={plz}
              onChange={(e) => setPlz(e.target.value)}
              onBlur={pruefePlz}
              placeholder="PLZ"
              className="w-32 border border-gray-300 rounded p-2"
            />
            </div>
            <div>
              {ortFehler && (
                <p className="text-sm text-red-600 mb-1">{ortFehler}</p>
              )}
              <input
                id="ort"
                type="text"
                value={ort}
                onChange={(e) => setOrt(e.target.value)}
                onBlur={pruefeOrt}
                placeholder="Ort"
                className="flex-1 border border-gray-300 rounded p-2"
              />
            </div>
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
