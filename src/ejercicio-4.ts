/**
 * Funcion que convierte de Snake Case a Camel Case
 * @param snakeString La cadena a convertir
 * @return La cadena convertida
 */
function fromSnakeToCamelCase(snakeString: string): string {
  let camelResult = "";
  snakeString.split("").forEach((element: string, index: number) => {
    if (/([A-Z]|[0-9])/.exec(element)) {
      camelResult = camelResult + "_" + element.toLowerCase();
    } else {
      camelResult = camelResult + element;
    }
  });
  return camelResult;
}

/**
 * Funcion que convierte de Camel Case a Snake Case
 * @param camelString La cadena a convertir
 * @return La cadena convertida
 */
function fromCamelToSnakeCase(camelString: string): string {
  let snakeResult = "";
  let lastElementUnderscore: boolean = false;
  camelString.split("").forEach((element: string, index: number) => {
    if (/(_)/.exec(element)) {
      snakeResult = snakeResult + camelString.charAt(index + 1).toUpperCase();
      lastElementUnderscore = true;
    } else if (lastElementUnderscore == false) {
      snakeResult = snakeResult + element;
    } else {
      lastElementUnderscore = false;
    }
  });
  return snakeResult;
}

console.log(fromSnakeToCamelCase("sampleString"));
console.log(fromCamelToSnakeCase("sample_string"));
