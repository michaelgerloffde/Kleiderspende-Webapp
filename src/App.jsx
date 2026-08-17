
import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";
import Bestaetigung from "./Bestaetigung";
import Spendenformular from "./Spendenformular";
import Danke from "./Danke";

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

  // Zurücksetzen der Werte nach Bestätigung
  function zuruecksetzen() {
    setSpendenart("");
    setKlingel("");
    setStrasse("");
    setPlz("");
    setOrt("");
    setKleidungsart("");
    setKrisengebiet("");
    setSchritt("formular");
  }
  return (
    <div>
      <Header 
        zeigeNavigation={schritt === "formular"}
      />
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
            klingel={klingel}
            strasse={strasse}
            plz={plz}
            ort={ort}
            // Prop zurück bei Falschen Angaben
            onZurueck={() => setSchritt("formular")}
            // Dankesfunktion bei Bestätigen
            onBestaetigen={() => setSchritt("dank")}
          />
        )}
        {/* Dankesschritt */}
        {schritt === "dank" && <Danke onNeu={zuruecksetzen} />}
      </main>
      <Footer />

      <div></div>
    </div>
  );
}

export default App;
