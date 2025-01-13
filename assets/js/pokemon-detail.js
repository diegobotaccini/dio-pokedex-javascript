// Função para obter parâmetros da URL
function getQueryParam(param) {
    const params = new URLSearchParams(window.location.search);
    return params.get(param);
}

// Função para renderizar os detalhes do Pokémon
function renderPokemonDetails(pokemon) {
    const detailElement = document.getElementById('pokemonDetail');
    detailElement.innerHTML = `
        <h1>${pokemon.name}</h1>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p><strong>Altura:</strong> ${pokemon.height / 10} m</p>
        <p><strong>Peso:</strong> ${pokemon.weight / 10} kg</p>
        <p><strong>Habilidades:</strong> ${pokemon.abilities.map(a => a.ability.name).join(', ')}</p>
        <p><strong>Tipos:</strong> ${pokemon.types.map(t => t.type.name).join(', ')}</p>
    `;
}

// Função para carregar dados do Pokémon pela API
async function loadPokemonDetails() {
    const pokemonName = getQueryParam('name');
    if (!pokemonName) {
        alert('Pokémon não encontrado!');
        return;
    }

    const pokemon = await PokeApi.getPokemonDetailByName(pokemonName);
    renderPokemonDetails(pokemon);
}

// Inicializar a página de detalhes
loadPokemonDetails();
