export function  validateName(name: string): boolean {
  let haveNormalLetters = true;
  if (name.search(/[a-zA-Zа-яА-Я]/) < 0) {
    haveNormalLetters = false;
  }
  let haveMoreThanOneSymbol = true;
  if (name.length < 2) {
    haveMoreThanOneSymbol = false;
  }
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
  const years18 = 18 * 1000 * 60 * 60 * 24 * 365;
  const years100 = 100 * 1000 * 60 * 60 * 24 * 365;
  let noNewerThan18Years = true;
  if (currentDateMs - birthDateMs < years18) {
    noNewerThan18Years = false;
  }
  let noElderThan100Years = true;
  if (currentDateMs - birthDateMs > years100) {
    noElderThan100Years = false;
  }
  return dateIsChosen && noNewerThan18Years && noElderThan100Years;
}

export function validateAvatar(avatar: string): boolean {
  let hasSrc = false;
  if (avatar) {
    hasSrc = true;
  }
  return hasSrc;
}
