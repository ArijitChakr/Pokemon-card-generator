class CardView {
  _parentEl = document.querySelector(".card-container");

  renderCard(data) {
    const html = `
        <div class="pokemon-card">
        <div class="pokemon-details">
          <img class="pokemon-image" src="${data.sprites.front_default}"/>
          <h2 class="pokemon-name">${
            data.name.slice(0, 1).toUpperCase() + data.name.slice(1)
          }</h2>
          <p class="pokemon-xp">XP: ${data.base_experience}</p>
          <h3 class="pokemon-type">Type: ${data.types[0].type.name}</h3>
          <p class="pokemon-abilities">Abilities : ${
            data.abilities[0].ability.name
          }, ${data.abilities[1].ability.name}</p>
        </div>
        <div class="pokemon-stats">
          <h4>Stats</h4>
          <ul class="state-details">
            <li>Hp: ${data.stats[0].base_stat}</li>
            <li>Attack: ${data.stats[1].base_stat}</li>
            <li>Defence: ${data.stats[2].base_stat}</li>
            <li>Special-attack: ${data.stats[3].base_stat}</li>
            <li>Special-defense: ${data.stats[4].base_stat}</li>
            <li>Speed: ${data.stats[5].base_stat}</li>
            <li>Leagues-played: ${data.game_indices.length}</li>
          </ul>
        </div>
      </div>
    `;
    this._parentEl.insertAdjacentHTML("afterbegin", html);
  }

  clearEl() {
    this._parentEl.innerHTML = "";
  }

  renderError(message) {
    const newhtml = `
        <div class="error">
          <h3>${message}, Please Enter Valid Pokemon type </h3>
        </div>
        `;
    this._parentEl.insertAdjacentHTML("afterbegin", newhtml);
  }
}
export default new CardView();
