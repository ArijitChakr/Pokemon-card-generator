import { state, searchResult } from "./data.js";
import SearchView from "./SearchView.js";
import CardView from "./CardView.js";

const generateCard = function () {
  state.pokemons.forEach((pokemon) => {
    CardView.renderCard(pokemon);
  });
};

const getData = async function () {
  try {
    const data = SearchView.getValue();
    if (!data.num || !data.type) return;

    state.pokemons = await searchResult(data.type, Number(data.num));

    CardView.clearEl();

    for (let pokemon of state.pokemons) {
      CardView.renderCard(pokemon);
    }
  } catch (error) {
    CardView.renderError(error);
  }
};

function init() {
  SearchView.addHandlerSearch(getData);
}
init();
