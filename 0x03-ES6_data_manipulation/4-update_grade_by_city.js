export default function updateStudentGradeByCity(students, city, newGrades){
  const student_filtered = students.filter(stud => stud.location === city);
  const stud_with_grade = student_filtered.map(student => {
    const item = newGrades.find(stud2 => stud2.studentId === student.id);
    return { ...student, grade: item ? item.grade : 'N/A' };
  });
  return stud_with_grade;
}
