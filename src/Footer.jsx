function Footer() {
  return (
    <footer id="impressum" className="bg-gray-100 border-t border-gray-200 mt-12">
      <div className="max-w-5xl mx-auto p-6 text-sm text-gray-600">
        <p className="mb-2">Kleiderspende e.V. · Musterstraße 1 · 12345 Musterstadt</p>
        <ul className="flex gap-4 mb-4">
          <li><a href="#" className="hover:text-blue-600">Impressum</a></li>
          <li><a href="#" className="hover:text-blue-600">Datenschutz</a></li>
        </ul>
        <p>© 2026 Kleiderspende e.V.</p>
      </div>
    </footer>
  )
}

export default Footer