export const state = {
  pokemons: [],
};

const generatePokemon = async function (url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    throw error;
  }
};

export const searchResult = async function (type, num) {
  try {
    const search = await fetch(`https://pokeapi.co/api/v2/type/${type}/`);
    if (!search.ok) throw new Error(`(${search.status}) Invalid Pokemon type`);
    const data = await search.json();

    const numCards = data.pokemon.slice(0, num);

    const links = [];
    numCards.forEach((card) => links.push(card.pokemon.url));

    const allPokemons = [];

    for (const link of links) {
      allPokemons.push(await generatePokemon(link));
    }

    return allPokemons;
  } catch (error) {
    throw error;
  }
};
