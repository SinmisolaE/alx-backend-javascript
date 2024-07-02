export default function cleanSet(set, startString) {
  if (startString === undefined || startString === '') {
    return '';
  }

  return [ ...set]
    .filter(obj => obj !== undefined ? obj.startsWith(startString) : '')
    .map(obj => obj !== undefined ? obj.slice(startString.length) : '')
    .join('-');
}
