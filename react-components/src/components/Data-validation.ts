export function  validateName(name: string): boolean {
  let haveNormalLetters = true;
  if (name.search(/[a-zA-Zа-яА-Я]/) < 0) {
    haveNormalLetters = false;
    console.log('dont have a single normal letter');
  }
  let haveMoreThanOneSymbol = true;
  if (name.length < 2) {
    haveMoreThanOneSymbol = false;
    console.log('dont have enougth letters');
  }
  console.log(haveNormalLetters && haveMoreThanOneSymbol);
  return haveNormalLetters && haveMoreThanOneSymbol;
}
