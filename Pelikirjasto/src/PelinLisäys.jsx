import { useState } from "react";

function PelinLisays({ lisaaPeli }) {
  const [nimi, setNimi] = useState("");
  const [genre, setGenre] = useState("");
  const [alusta, setAlusta] = useState("");
  const [kuvaus, setKuvaus] = useState("");

  function kasitteleLomake(tapahtuma) {
    tapahtuma.preventDefault();

    if (!nimi.trim() || !genre.trim() || !alusta.trim()) {
      return;
    }

    lisaaPeli({
      nimi: nimi.trim(),
      genre: genre.trim(),
      alusta: alusta.trim(),
      kuvaus: kuvaus.trim() || "Ei kuvausta.",
    });

    setNimi("");
    setGenre("");
    setAlusta("");
    setKuvaus("");
  }

  return (
    <section className="lisays-osio">
      <h2>Uusi Peli</h2>

      <form onSubmit={kasitteleLomake} className="pelilomake">
        <div className="lomakekentta">
          <label htmlFor="pelin-nimi">Pelin nimi *</label>
          <input
            id="pelin-nimi"
            type="text"
            value={nimi}
            onChange={(tapahtuma) => setNimi(tapahtuma.target.value)}
            placeholder="Kirjoita nimi"
            required
          />
        </div>

        <div className="lomakekentta">
          <label htmlFor="pelin-genre">Genre *</label>
          <input
            id="pelin-genre"
            type="text"
            value={genre}
            onChange={(tapahtuma) => setGenre(tapahtuma.target.value)}
            placeholder="Kirjoita genre"
            required
          />
        </div>

        <div className="lomakekentta">
          <label htmlFor="pelin-alusta">Alusta *</label>
          <input
            id="pelin-alusta"
            type="text"
            value={alusta}
            onChange={(tapahtuma) => setAlusta(tapahtuma.target.value)}
            placeholder="Kirjoita alusta"
            required
          />
        </div>

        <div className="lomakekentta">
          <label htmlFor="pelin-kuvaus">Kuvaus</label>
          <textarea
            id="pelin-kuvaus"
            value={kuvaus}
            onChange={(tapahtuma) => setKuvaus(tapahtuma.target.value)}
            placeholder="Kirjoita kuvaus"
            rows="3"
          />
        </div>

        <button className="lisaa-nappi" type="submit">
          + Lisää peli
        </button>
      </form>
    </section>
  );
}

export default PelinLisays;