import { useEffect, useState } from "react";
import Peli from "./Peli";
import PelinLisays from "./PelinLisäys";
import "./index.css";

const alkupelit = [
  {
    id: 1,
    nimi: "Batman Arkham Asylum",
    genre: "Toiminta",
    alusta: "PC / Konsoli",
    kuvaus: "Batman taistelee Jokeria ja muita pahiksia arkham asylumissa",
  },
  {
    id: 2,
    nimi: "Assetto Corsa",
    genre: "Kilpa-ajo",
    alusta: "PC",
    kuvaus: "Autolla kilpaa ajaminen",
  },
  {
    id: 3,
    nimi: "Outlast",
    genre: "Kauhu",
    alusta: "PC / Konsoli",
    kuvaus: "Menet mielisairaalaan ja siellä on pelottavia juttuja",
  },
];

{/* alla oleva funktio on AI */}
function haeTallennetutPelit() {
  try {
    const tallennetut = localStorage.getItem("pelikirjasto");

    if (tallennetut !== null) {
      const pelit = JSON.parse(tallennetut);

      if (Array.isArray(pelit)) {
        return pelit;
      }
    }
  } catch (virhe) {
    console.error("Pelien lukeminen epäonnistui:", virhe);
  }

  return alkupelit;
}

function App() {
  {/* Tästä seuraavaan kommenttiin on AI*/}
  const [pelit, setPelit] = useState(haeTallennetutPelit);

  useEffect(() => {
    try {
      localStorage.setItem("pelikirjasto", JSON.stringify(pelit));
    } catch (virhe) {
      console.error("Tallennus ei onnistunut:", virhe);
    }
  }, [pelit]);

  function lisaaPeli(uusiPeli) {
    setPelit((nykyisetPelit) => [
      ...nykyisetPelit,
      { ...uusiPeli, id: crypto.randomUUID() },
    ]);
  }

  function poistaPeli(id) {
    const vahvistus = window.confirm(
      "Poistetaanko oikeasti?"
    );

    if (vahvistus) {
      setPelit((nykyisetPelit) =>
        nykyisetPelit.filter((peli) => peli.id !== id)
      );
    }
  }
  {/* tähän loppui AI */}

  return (
    <main className="sovellus">
      <header className="ylätunniste">
        <h1>Pelikirjasto</h1>
      </header>

      <section className="sisalto">
        <PelinLisays lisaaPeli={lisaaPeli} />

        <section className="pelilista">
          <h2>Pelit ({pelit.length})</h2>
          {pelit.length === 0 ? (
            <p className="ei-peleja">Ei ole pelejä</p>
          ) : (
            <div className="peliruudukko">
              {pelit.map((peli) => (
                <Peli
                  key={peli.id}
                  peli={peli}
                  poistaPeli={poistaPeli}
                />
              ))}
            </div>
          )}

        </section>
      </section>
    
      <footer className="alatunniste">
          <p>Pelikirjasto - Ville Korhonen</p>
      </footer>
    </main>
  );
}

export default App;