export default function hasValuesFromArray(set, array) {
  for (const itr of array) {
    if (!set.has(itr)) {
      return false;
    }
  }
  return true;
}
