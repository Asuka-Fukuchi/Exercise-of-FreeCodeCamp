const creatureInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const creatureName = document.getElementById("creature-name");
const creatureID = document.getElementById("creature-id");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const types = document.getElementById("types");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

searchBtn.addEventListener("click", async () => {
    const query = creatureInput.value.trim().toLowerCase();

    if (!query) return;

    try {
        const res = await fetch(`https://rpg-creature-api.freecodecamp.rocks/api/creature/${query}`);
        
        if (!res.ok) {
            throw new Error("Creature not found");
        }
        
        const data = await res.json();
        console.log(data);

        creatureName.textContent = `${data.name.toUpperCase()}`;
        creatureID.textContent = `${data.id}`;
        weight.textContent = `${data.weight}`;
        height.textContent = `${data.height}`;

        hp.textContent = data.stats[0].base_stat;
        attack.textContent = data.stats[1].base_stat;
        defense.textContent = data.stats[2].base_stat;
        specialAttack.textContent = data.stats[3].base_stat;
        specialDefense.textContent = data.stats[4].base_stat;
        speed.textContent = data.stats[5].base_stat;

        types.innerHTML = "";
        types.innerHTML = data.types
            .map(obj => `<span class="type ${obj.name}">${obj.name.toUpperCase()}</span>`)
            .join("");

    } catch (err) {
        alert("Creature not found");
    }
});