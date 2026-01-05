const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const creatureName = document.getElementById("creature-name");
const creatureID = document.getElementById("creature-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const typesDiv = document.getElementById("types"); 
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

const getCreatureData = async () => {
  try {
    const nameOrId = searchInput.value.toLowerCase();

    if (!nameOrId) {
      alert("Please enter a creature name or ID!");
      resetAll();
      return;
    }

    const res = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${nameOrId}`);

    if (!res.ok) {
      throw new Error('Creature not found');
    }

    const data = await res.json();
    //console.log(data);
    getCreatureStats(data);
  } catch (err) {
    console.error(`Error fetching creature data: ${err.message}`);
    alert(err.message);
    resetAll();
  }
};

const getCreatureStats = data => {
  const {
    name,
    id,
    weight: creatureWeight,
    height: creatureHeight,
    types,
    stats
  } = data;

  creatureName.textContent = `${name.toUpperCase()}`;
  creatureID.textContent = `${id}`;
  weight.textContent = `${creatureWeight}`; 
  height.textContent = `${creatureHeight}`; 

  hp.textContent = `${stats[0].base_stat}`;
  attack.textContent = `${stats[1].base_stat}`;
  defense.textContent = `${stats[2].base_stat}`;
  specialAttack.textContent = `${stats[3].base_stat}`;
  specialDefense.textContent = `${stats[4].base_stat}`;
  speed.textContent = `${stats[5].base_stat}`;

  typesDiv.innerHTML = types.map(obj => `<span class="type ${obj.name}">${obj.name.toUpperCase()}</span>`).join("");
};

const resetAll = () => {
  creatureName.textContent = "";
  creatureID.textContent = "";
  weight.textContent = "";
  height.textContent = "";
  hp.textContent = "";
  attack.textContent = "";
  defense.textContent = "";
  specialAttack.textContent = "";
  specialDefense.textContent = "";
  speed.textContent = "";
  typesDiv.innerHTML = ""; 
};

searchButton.addEventListener("click", e => {
  e.preventDefault();
  getCreatureData();
});