export default function getStudentsByLocation(students, city) {
  const all = students.filter(common_students => common_students.location === city);
  return all;
}
