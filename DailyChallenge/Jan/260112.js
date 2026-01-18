// Plant the Crop
// Given an integer representing the size of your farm field, and "acres" or "hectares" representing the unit for the size of your farm field, and a type of crop, determine how many plants of that type you can fit in your field.

// 1 acre equals 4046.86 square meters.
// 1 hectare equals 10,000 square meters.
// Here's a list of crops that will be given as input and how much space a single plant takes:

// Crop	Space per plant
// "corn"	1 square meter
// "wheat"	0.1 square meters
// "soybeans"	0.5 square meters
// "tomatoes"	0.25 square meters
// "lettuce"	0.2 square meters
// Return the number of plants that fit in the field, rounded down to the nearest whole plant.

function getNumberOfPlants(fieldSize, unit, crop) {
  if(unit === "acres"){
    fieldSize = fieldSize * 4046.86;
  } else if (unit === "hectares"){
    fieldSize =  fieldSize * 10000;
  } else {
    return "Please give us the right word";
  }

  if(crop === "corn"){
    // Math.trunc: 小数点以下を削除
    return Math.trunc(fieldSize);
  } else if( crop === "wheat"){
    return Math.trunc(fieldSize / 0.1);
  } else if (crop === "soybeans"){
    return Math.trunc(fieldSize / 0.5);
  } else if ( crop === "tomatoes"){
    return Math.trunc(fieldSize / 0.25);
  } else if( crop === "lettuce"){
    return Math.trunc(fieldSize / 0.2);
  } else{
    return "Please give us the right word";
  }

}

console.log(getNumberOfPlants(1, "acres", "corn"));
console.log(getNumberOfPlants(2, "hectares", "lettuce"));
console.log(getNumberOfPlants(20, "acres", "soybeans"));
console.log(getNumberOfPlants(3.75, "hectares", "tomatoes"));
console.log(getNumberOfPlants(16.75, "acres", "tomatoes"));