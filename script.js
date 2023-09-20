const pokeSearch = document.getElementById('searchInput');
const pokeSearchButton = document.getElementById('searchButton');

pokeSearchButton.addEventListener('click', () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeSearch.value}`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        document.getElementById('searchResult').innerHTML = `<div class="card" style="width: 18rem;">
        <img src="${data.sprites.other['official-artwork'].front_default}" class="card-img-top" alt="Pokemon Sprite">
        <div class="card-body">
          <h5 class="card-title">${data.name.toUpperCase()}</h5>
          <p class="card-text">No: ${data.id}</p>
          <p class="card-text">Altura: ${parseFloat(data.height)/10} m</p>
          <p class="card-text">Peso: ${parseFloat(data.weight)/10} kg</p>
          <p class="card-text"></p>
        </div>
      </div>`
    })
    .catch(error => console.log(error))
})