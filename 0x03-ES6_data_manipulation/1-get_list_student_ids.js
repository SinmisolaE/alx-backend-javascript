export default function(array) {
  if (!Array.isArray(array)) {
    return [];
  }

  return (array.map(students => students.id));
}
