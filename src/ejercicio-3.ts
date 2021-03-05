/**
 * Funcion que valida mensajes segun las reglas planteadas en el guion
 * @param plainText La cadena a revisar si es valida o no
 * @return El flag de validacion, true si es valido y false si no
 */
function isValid(plainText: string): boolean {
  let flag: boolean = true;
  if (plainText === "") {
    return true;
  }
  const split: string[] = plainText.split(/(\d+)/);
  split.shift();
  split.forEach((element: string, index: number) => {
    if (!/(^\w*$)/.exec(element)) {
      flag = false;
    } else if (!/\d/.exec(element)) {
      if (element.length != parseInt(split[index - 1])) {
        flag = false;
      }
    }
  });
  return flag;
}

console.log(isValid("3hey4hello2hi"));
