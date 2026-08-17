function Header({zeigeNavigation}) {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between p-4">
       
       {/* Div Name und logo */}
        <div className="flex items-center gap-3">
          <img src="/stoffwechsel-logo- ohne-schrift.svg" alt="Logo Stoffwechsel e.V." className="h-14 relative top-[5px]" />
          <h1 className="text-xl md:text-2xl font-bold text-gray-900">
            Stoffwechsel e.V.
          </h1>
        </div>

        {/* ab Tablet */}
        {zeigeNavigation && (
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-gray-700">
            <li>
              <a href="#" className="hover:text-blue-600">
                Startseite
              </a>
            </li>
            <li>
              <a href="#formular" className="hover:text-blue-600">
                Spenden
              </a>
            </li>
            <li>
              <a href="#impressum" className="hover:text-blue-600">
                Impressum
              </a>
            </li>
          </ul>
        </nav>
        )}

        {/* nur Smartphone */}
        {zeigeNavigation && (
        <details className="md:hidden relative">
          <summary className="cursor-pointer text-2xl list-none">☰</summary>
          <ul className="absolute right-0 mt-2 bg-white border border-gray-200 rounded shadow-md py-2 w-44 text-gray-700">
            <li>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Startseite
              </a>
            </li>
            <li>
              <a href="#formular" className="block px-4 py-2 hover:bg-gray-100">
                Spenden
              </a>
            </li>
            <li>
              <a
                href="#impressum"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Impressum
              </a>
            </li>
          </ul>
        </details>
        )}
      </div>
    </header>
  );
}

export default Header;
