/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

initialGradesLoad();

function initialGradesLoad() {
  fetch('/api/grades')
    .then(res => res.json())
    .then(grades => {
      log(() => grades);
      renderGrades(grades);
    });
}

function getGrades(id) {
  fetch(`/api/grades/${id}`)
    .then(res => res.json())
    .then(output => {
      console.log('GRADE:', output);
    });
}

const $grades = document.querySelector('.grades');

function renderGrades(gradeArray) {
  for (const grade of gradeArray) {
    const $p = document.createElement('div');
    $p.id = `id-${grade.gradeId}`;
    $p.textContent = `${grade.name}, ${grade.course}: ${grade.score}`;
    const $edit = document.createElement('button');
    $edit.textContent = 'edit';
    const $delete = document.createElement('button');
    $delete.textContent = 'delete';
    $p.appendChild($edit);
    $p.appendChild($delete);
    $grades.appendChild($p);
  }
}

const log = v => {
  var varName = (v).toString().replace(/[ |\(\)=>]/g, '');
  var varValue = (v)();
  console.log('%c' + varName + ':', 'color: #C3B1E1', varValue);
};
