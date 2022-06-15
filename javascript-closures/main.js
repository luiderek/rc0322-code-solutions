
function graduate(credential) {
  return function (fullName) {
    return `${fullName}, ${credential}`;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

console.log(medicalSchool('Dan Abramov')); // 'Dan Abramov, M.D.'
console.log(lawSchool('Ryan Florence')); // 'Ryan Florence, Esq.'
