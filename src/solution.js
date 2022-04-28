/*
  Write a function that returns a particular student when given a name. If no name matches, return `null`.
*/

function findStudentByName(students, name) {
  let found = students.find(item => item.name === name);
  if (found === undefined) {
    found = null;
  }
  return found;
}

module.exports = findStudentByName;
