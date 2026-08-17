function Footer() {
  return (
    <footer
      id="impressum"
      className="bg-gray-100 border-t border-gray-200 mt-12"
    >
      <div className="max-w-5xl mx-auto p-6 text-sm text-gray-600">
        <p className="mb-2">
          Stoffwechsel e.V. · Bleierstraße 1 · 76131 Karlsruhe
        </p>
        <details className="mb-3">
          <summary className="cursor-pointer font-semibold hover:text-blue-600">
            Impressum
          </summary>
          <div className="mt-2 space-y-1">
            <p>Stoffwechsel e.V.</p>
            <p>Bleierstraße 1, 76131 Karlsruhe</p>
            <p>Vertreten durch den Vorstand: [Name]</p>
            <p>Registergericht: Amtsgericht Karlsruhe, VR [Nummer]</p>
            <p>Kontakt: info@stoffwechsel-ev.de</p>
          </div>
        </details>

        <details className="mb-4">
          <summary className="cursor-pointer font-semibold hover:text-blue-600">
            Datenschutz
          </summary>
          <div className="mt-2 space-y-1">
            <p>
              Die im Registrierungsformular eingegebenen Angaben werden
              ausschließlich im Browser verarbeitet. Es findet keine Übertragung
              an einen Server und keine dauerhafte Speicherung statt.
            </p>
            <p>
              Bei einer Abholung wird lediglich der Name an der Klingel erhoben,
              nicht der vollständige Name. Diese Angabe ist für das Auffinden
              der Adresse durch das Sammelfahrzeug erforderlich. Bei einer
              Übergabe an der Geschäftsstelle entfällt die Erhebung von
              Adressdaten vollständig.
            </p>
          </div>
        </details>
        <p>© 2026 Stoffwechsel e.V.</p>
      </div>
    </footer>
  );
}

export default Footer;
