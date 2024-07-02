export default function setFromArray(element) {
  const set = new Set();
  for (const elem of element) {
    set.add(elem);
  }
  return set;
}
