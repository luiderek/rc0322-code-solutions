/* eslint-disable no-console */
/* eslint-disable no-unused-vars */

initialGradesLoad();

function initialGradesLoad() {
  fetch('/api/grades')
    .then(res => res.json())
    .then(grades => {
      log(() => grades);
      renderGradeArray(grades);
    });
}

function getGrades(id) {
  fetch(`/api/grades/${id}`)
    .then(res => res.json())
    .then(output => {
      console.log('GRADE:', output);
    });
}

function postGrade(object) {
  fetch('/api/grades/', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(object)
  }).then(res => {
    if (res.ok) {
      console.log('HTTP request successful');
      log(() => res.body);
      // addGrade(res.body);
    } else {
      console.log('HTTP request unsuccessful');
    }
    return res;
  })
    .then(res => res.json())
    .then(data => {
      log(() => data);
      addGradeRender(data);
    }
    )
    .catch(error => log(() => error));
}

function putGrade(id, object) {
  fetch(`/api/grades/${id}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(object)
  }).then(res => {
    if (res.ok) {
      console.log('HTTP request successful');
      log(() => res.body);
      // addGrade(res.body);
    } else {
      console.log('HTTP request unsuccessful');
    }
    return res;
  })
  // I need an explaination on what the below line is doing.
    .then(res => res.json())
    .then(data => {
      log(() => data);
      updateGradeRender(id, data);
      // addGrade(data);
    }
    )
    .catch(error => log(() => error));
}

function deleteGrade(id) {
  fetch(`/api/grades/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-type': 'application/json'
    }
  })
    .then(res => {
      if (res.ok) {
        console.log(`delete http request success, ${id} removed`);
        removeGradeRender(id);
      } else {
        console.log('delete http request failed');
      }
    });
}

const $grades = document.querySelector('.grades');
const $generatebutton = document.querySelector('.generatebutt');

$grades.addEventListener('click', function (event) {
  switch (event.target.nodeName) {
    case 'BUTTON':
      if (event.target.textContent === 'delete') {
        const targetid = event.target.closest('div').id.split('-')[1];
        deleteGrade(targetid);
      }
      // log(() => );

      break;
  }
  // log(() => event.target);
});

$generatebutton.addEventListener('click', function (event) {
  const randname = `${firstNames[~~(Math.random() * firstNames.length)]} ${lastNames[~~(Math.random() * lastNames.length)]}`;
  const randcourse = courses[~~(Math.random() * courses.length)];
  const randscore = ~~(Math.random() * 100);
  postGrade({ name: randname, course: randcourse, score: randscore });
});

const firstNames = ['bob', 'bill', 'bobby', 'billy', 'ben', 'brandon', 'bernard'];
const lastNames = ['shiba', 'chihuahua', 'husky', 'shitzu', 'bagel', 'lab'];
const courses = ['math', 'hard math', 'depressing math', 'math with letters', 'pain'];

function renderGradeArray(gradeArray) {
  clearGradeRender();
  for (const grade of gradeArray) {
    const $p = document.createElement('div');
    addGradeRender(grade);
  }
}

function removeGradeRender(id) {
  const killme = document.querySelector(`#id-${id}`);
  killme.remove();
}

function addGradeRender(grade) {
  const $p = document.createElement('div');
  $p.id = `id-${grade.gradeId}`;
  $p.textContent = `${grade.gradeId}: ${grade.name} | ${grade.course} | ${grade.score}`;
  const $edit = document.createElement('button');
  $edit.textContent = 'edit';
  const $delete = document.createElement('button');
  $delete.textContent = 'delete';
  $p.appendChild($edit);
  $p.appendChild($delete);
  $grades.appendChild($p);
}

function clearGradeRender() {
  while ($grades.firstChild) {
    $grades.removeChild($grades.firstChild);
  }
}

function updateGradeRender(id, grade) {
  const $updateme = document.querySelector(`#id-${id}`);
  $updateme.textContent = `${grade.gradeId}: ${grade.name} | ${grade.course} | ${grade.score}`;
  const $edit = document.createElement('button');
  $edit.textContent = 'edit';
  const $delete = document.createElement('button');
  $delete.textContent = 'delete';
  $updateme.appendChild($edit);
  $updateme.appendChild($delete);
}

const log = v => {
  var varName = (v).toString().replace(/[ |\(\)=>]/g, '');
  var varValue = (v)();
  console.log('%c' + varName + ':', 'color: #C3B1E1', varValue);
};
