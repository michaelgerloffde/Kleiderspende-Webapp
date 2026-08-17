import { geschaeftsstellen } from './Listen'

function Bestaetigung({
  spendenart,
  kleidungsart,
  krisengebiet,
  zeitpunkt,
  klingel,
  strasse,
  plz,
  ort,
  onZurueck,
  onBestaetigen
}) {
  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Bitte prüfen Sie Ihre Angaben
      </h2>

      <div className="max-w-2xl border border-gray-300 rounded p-6 mb-8">
        <dl className="space-y-3">
          <div className="flex">
            <dt className="w-56 font-semibold">Art der Spende</dt>

            {/* Kurz if für Art der Spende  */}
            <dd>
              {spendenart === "abholung"
                ? "Abholung durch Sammelfahrzeug"
                : "Übergabe an der Geschäftsstelle"}
            </dd>
          </div>

          {/* Bedingter Block für Adresse */}
          {spendenart === "abholung" && (
            <>
              <div className="flex">
                <dt className="w-56 font-semibold">Name an der Klingel</dt>
                <dd>{klingel}</dd>
              </div>
              <div className="flex">
                <dt className="w-56 font-semibold">Straße und Hausnummer</dt>
                <dd>{strasse}</dd>
              </div>
              <div className="flex">
                <dt className="w-56 font-semibold">PLZ und Ort</dt>
                <dd>
                  {plz} {ort}
                </dd>
              </div>
            </>
          )}

          <div className="flex">
            <dt className="w-56 font-semibold">Art der Kleidung</dt>
            <dd>{kleidungsart}</dd>
          </div>
          <div className="flex">
            <dt className="w-56 font-semibold">Krisengebiet</dt>
            <dd>{krisengebiet || "Keine Präferenz – Zuordnung durch den Verein"}</dd>     
         </div>
          <div className="flex">
            <dt className="w-56 font-semibold">Datum</dt>
            <dd>{zeitpunkt.toLocaleDateString("de-DE")}</dd>
          </div>
          <div className="flex">
            <dt className="w-56 font-semibold">Uhrzeit</dt>
            <dd>{zeitpunkt.toLocaleTimeString("de-DE")} Uhr</dd>
          </div>
          {/* Anzeige Ort bei Übergabe ansonsten eingebundene Adresselemente */}
          {spendenart === "uebergabe" && (
            <div className="flex">
              <dt className="w-56 pr-4 font-semibold">Ort</dt>
              <dd>{geschaeftsstellen[0].name}</dd>
            </div>
          )}
        </dl>
      </div>

      <div className="flex gap-4">
        <button  onClick={onZurueck} className="border border-gray-400 px-6 py-3 rounded font-semibold hover:bg-gray-100">
          Angaben ändern
        </button>
        <button onClick= {onBestaetigen} className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700">
          Verbindlich bestätigen
        </button>
      </div>
    </section>
  );
}

export default Bestaetigung;
