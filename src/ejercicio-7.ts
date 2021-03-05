/**
 * Funcion que busca el siguiente numero mayor
 * @param startNumber El numero inicial
 * @return El numero siguiente mayor
 */
function nextHighest(startNumber: number): number {
  const splitString: string[] = startNumber.toString().split("");
  const len: number = splitString.length;
  let i: number;
  for (i = len - 1; i > 0; --i) {
    if (parseInt(splitString[i]) > parseInt(splitString[i - 1])) {
      break;
    }
  }

  if (i === 0) {
    return -1;
  } else {
    const smallest: number = parseInt(splitString[i - 1]);
    let minimunPos: number = i;
    for (let j = i + 1; j < len; ++j) {
      if (parseInt(splitString[j]) > smallest &&
        parseInt(splitString[j]) < parseInt(splitString[minimunPos])) {
        minimunPos = j;
      }
    }

    [splitString[i - 1], splitString[minimunPos]] =
      [splitString[minimunPos], splitString[i - 1]];

    const result: number = parseInt(splitString.slice(0, i)
      .concat(splitString.slice(i, len).sort()).join().replace(/,/g, ""));
    return result;
  }
}

console.log(nextHighest(8940));