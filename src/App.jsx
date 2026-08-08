import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Bestaetigung from "./Bestaetigung";
import Spendenformular from "./Spendenformular";

import { kleidungsarten, krisengebiete } from "./Listen";

function App() {
  const [schritt, setSchritt] = useState("formular");

  const [zeitpunkt, setZeitpunkt] = useState(null);

  // Zustand nach App.jsx verschieben
  const [spendenart, setSpendenart] = useState("");
  const [klingel, setKlingel] = useState("");
  const [strasse, setStrasse] = useState("");
  const [plz, setPlz] = useState("");
  const [ort, setOrt] = useState("");
  const [kleidungsart, setKleidungsart] = useState("");
  const [krisengebiet, setKrisengebiet] = useState("");

  return (
    <div>
      <Header />
      <main>
        {/* Schritt für Seitenwechsel */}
        {schritt === "formular" && (
          <>
            <Hero />
            {/* Props ergänzen */}
            <Spendenformular
              // Funktion an Formular übergeben
              onWeiter={() => {
                setZeitpunkt(new Date());
                setSchritt("bestaetigung");
              }}

              spendenart={spendenart}
              setSpendenart={setSpendenart}
              klingel={klingel}
              setKlingel={setKlingel}
              strasse={strasse}
              setStrasse={setStrasse}
              plz={plz}
              setPlz={setPlz}
              ort={ort}
              setOrt={setOrt}
              kleidungsart={kleidungsart}
              setKleidungsart={setKleidungsart}
              krisengebiet={krisengebiet}
              setKrisengebiet={setKrisengebiet}
            />
          </>
        )}
        {/* Schritt Seitenwechsel  */}
        {schritt === "bestaetigung" && (
          <Bestaetigung
            zeitpunkt={zeitpunkt}
            spendenart={spendenart}
            kleidungsart={kleidungsart}
            krisengebiet={krisengebiet}
            
          />
        )}
      </main>
      <Footer />

      <div></div>
    </div>
  );
}

export default App;
