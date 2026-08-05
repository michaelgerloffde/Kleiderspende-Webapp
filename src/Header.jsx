function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-gray-900">Stoffwechsel e.V.</h1>
        <nav>
          <ul className="flex gap-6 text-gray-700">
            <li><a href="#formular" className="hover:text-blue-600">Spenden</a></li>
            <li><a href="#ablauf" className="hover:text-blue-600">Ablauf</a></li>
            <li><a href="#impressum" className="hover:text-blue-600">Impressum</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header