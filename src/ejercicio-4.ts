/**
 * Funcion que convierte de Camel a Snake
 * @param snakeString La cadena a convertir
 * @return La cadena convertida
 */
export function fromCamelToSnakeCase(snakeString: string): string {
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
 * Funcion que convierte de Snake a Camel
 * @param camelString La cadena a convertir
 * @return La cadena convertida
 */
export function fromSnakeToCamelCase(camelString: string): string {
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

