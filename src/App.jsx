import Header from './Header'
import Hero from "./Hero"
import Footer from "./Footer"
import Bestaetigung from './Bestaetigung'
import Spendenformular from "./Spendenformular"

import { kleidungsarten, krisengebiete } from './Listen'


function App() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Spendenformular />

      </main>
      <Footer />

      <div>
      
      </div>
    </div>
  )
}

export default App