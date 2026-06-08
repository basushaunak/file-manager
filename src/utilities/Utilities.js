export function acronym(string) {
  const words = string.match(/[a-zA-Z]+/g) || [];
  if (words.length === 0) {
    return null;
  }
  let acronym = "";
  for (let word of words) {
    acronym += word[0].toUpperCase();
    if (acronym.length === 10) {
      break;
    }
  }
  return acronym;
}
