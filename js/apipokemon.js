const rowCards = document.getElementById('rowCards');

const getPokemones = async () => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/`);
    const data = await response.json();

    for (let i of data.results) {
      const response = await fetch(i.url);
      const data = await response.json();
      //return data

      rowCards.innerHTML +=
      `<div class= "card mt-4">
      <img class ="card-img-top mt-2" src="${data.sprites.other.home.front_default}">
      <h2 class="card-title text-center">${data.name}</h2>
        </div>`
    }
  } catch (error) {
    console.log(error);
  }
};
getPokemones();