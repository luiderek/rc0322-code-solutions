/* exported getStudentNames */

function getStudentNames(students) {
  const out = [];
  for (const student of students) {
    out.push(student.name);
  }
  return out;
}
