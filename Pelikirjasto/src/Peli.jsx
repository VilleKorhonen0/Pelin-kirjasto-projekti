{/* tämä alla oleva funktio on AIlla tehty */}
function Peli({ peli, poistaPeli }) {
  return (
    <article className="pelikortti">
      <div className="pelikortin-sisalto">
        <h3>{peli.nimi}</h3>

        <p>
          <strong>Genre:</strong> {peli.genre}
        </p>

        <p>
          <strong>Alusta:</strong> {peli.alusta}
        </p>

        <p className="pelin-kuvaus">{peli.kuvaus}</p>
      </div>

      <button
        className="poista-nappi"
        onClick={() => poistaPeli(peli.id)}
        type="button"
      >
        Poista peli
      </button>
    </article>
  );
}

export default Peli;