// referencias
const rowCards = document.querySelector('#rowCards');

const getPokemones = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const init = async () => {
  const pokemons = await getPokemones();
  createCards(pokemons.results);
}
init();

cardPokemon = (pokemon) => {
  //elementos html
  const cardBootstrap = document.createElement('div');
  const imgCard = document.createElement('img');
  const titlePokemon = document.createElement('h5');

  const namePokemon = document.createTextNode(pokemon.name);

  // clases
  cardBootstrap.classList.add('card', 'mt-4');
  imgCard.classList.add('card-img-top', 'mt-2');
  titlePokemon.classList.add('card-title', 'text-center');
  
  titlePokemon.appendChild(namePokemon);
  imgCard.src=pokemon.sprites;

  cardBootstrap.append(imgCard, titlePokemon);
  rowCards.append(cardBootstrap);
}

createCards = (pokemons) => {
  pokemons.map(element => cardPokemon(element));
}