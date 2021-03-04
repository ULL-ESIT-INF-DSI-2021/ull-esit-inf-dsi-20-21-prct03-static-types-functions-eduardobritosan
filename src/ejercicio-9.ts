type pokeTypes = "Fuego" | "Hierba" | "Electrico" | "Agua";

/**
 * Calcs the damage of a pokemon attack
 * @param pokeType Type of the pokemon attacking
 * @param oppType Type of the pokemon receiving the attack
 * @param pokeAttack The attack stat of the attacking pokemon
 * @param oppDefense The defense stat of the defending pokemon
 */
export function pokeDamage(pokeType: pokeTypes, oppType: pokeTypes,
  pokeAttack: number, oppDefense: number) {
  let effectiveness: number = 0;

  if (pokeType == "Fuego") {
    switch (oppType) {
      case "Hierba":
        effectiveness = 2;
        break;
      case "Electrico":
        effectiveness = 1;
        break;
      default:
        effectiveness = 0.5;
    }
  } else if (pokeType == "Agua") {
    switch (oppType) {
      case "Fuego":
        effectiveness = 2;
        break;
      default:
        effectiveness = 0.5;
    }
  } else if (pokeType == "Hierba") {
    switch (oppType) {
      case "Agua":
        effectiveness = 2;
        break;
      case "Electrico":
        effectiveness = 1;
        break;
      default:
        effectiveness = 0.5;
        break;
    }
  } else {
    switch (oppType) {
      case "Agua":
        effectiveness = 2;
        break;
      case "Fuego" || "Hierba":
        effectiveness = 1;
        break;
      default:
        effectiveness = 0.5;
    }
  }

  return 50 * (pokeAttack / oppDefense) * effectiveness;
}

console.log(pokeDamage("Agua", "Fuego", 1, 1));
