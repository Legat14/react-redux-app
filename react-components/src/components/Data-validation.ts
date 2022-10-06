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

export function  validateDate(date: string): boolean {
  let dateIsChosen = true;
  if (!date) {
    dateIsChosen = false;
  }
  const birthDateMs = Date.parse(date);
  const currentDate = new Date().toLocaleString();
  const currentDateMs = Date.parse(currentDate);
  console.log('Provided Date: ', birthDateMs);
  console.log('Date now: ', currentDateMs);
  const years18 = 18 * 1000 * 60 * 60 * 24 * 365;
  const years100 = 100 * 1000 * 60 * 60 * 24 * 365;
  let noNewerThan18Years = true;
  if (currentDateMs - birthDateMs < years18) {
    noNewerThan18Years = false;
    console.log('Less than 18 yars');
    console.log('currentDateMs', currentDateMs);
    console.log('birthDateMs', birthDateMs);
    console.log(years18);
  }
  let noElderThan100Years = true;
  if (currentDateMs - birthDateMs > years100) {
    noElderThan100Years = false;
    console.log('More than 100 yars');
  }
  return dateIsChosen && noNewerThan18Years && noElderThan100Years;
}
