const forma = document.getElementById('registracija');

forma.addEventListener('submit', (e) => {
  e.preventDefault();

  const vardas = forma.elements['vardas'].value;
  const elpastas = forma.elements['elpastas'].value;
  const amzius = forma.elements['amzius'].value;
  const telefonoNumeris = forma.elements['telefono-numeris'].value;
  const slaptažodis = forma.elements['slaptažodis'].value;
  const pakartotinasSlaptažodis = forma.elements['pakartotinas-slaptažodis'].value;

  if (!vardas.match(/^[a-zA-Z]{3,30}$/)) {
    document.getElementById('vardas-error').innerHTML = 'Vardas turi būti sudarytas tik iš raidžių, ilgesnis nei 2 simboliai, bet ne ilgesnis nei 30.';
  } else {
    document.getElementById('vardas-error').innerHTML = '';
  }

  if (!elpastas.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)) {
    document.getElementById('elpastas-error').innerHTML = 'Įvestas el. pašto adresas yra netinkamos formos.';
  } else {
    document.getElementById('elpastas-error').innerHTML = '';
  }

  if (amzius < 18 || amzius > 119) {
    document.getElementById('amzius-error').innerHTML = 'Amžius turi būti daugiau nei 17, mažiau nei 120.';
  } else {
    document.getElementById('amzius-error').innerHTML = '';
  }

  if (!telefonoNumeris.match(/^\+\d{11}$/)) {
    document.getElementById('telefono-numeris-error').innerHTML = 'Telefono numeris turi atitikti formatą +xxx xxx xxxxx.';
  } else {
    document.getElementById('telefono-numeris-error').innerHTML = '';
  }

  if (!slaptažodis.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)) {
    document.getElementById('slaptažodis-error').innerHTML = 'Slaptažodyje turi būti bent 8 simboliai, bent vienas didžioji raidė, mažoji raidė, skaičius ir specialus simbolis.';
  } else {
    document.getElementById('slaptažodis-error').innerHTML = '';
  }

  if (slaptažodis !== pakartotinasSlaptažodis) {
    document.getElementById('pakartotinas-slaptažodis-error').innerHTML = 'Slaptažodžiai nesutampa.';
  } else {
    document.getElementById('pakartotinas-slaptažodis-error').innerHTML = '';
  }

  if (vardas.match(/^[a-zA-Z]{3,30}$/) &&
    elpastas.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/) &&
    amzius >= 18 && amzius <= 120 &&
    telefonoNumeris.match(/^\+\d{11}$/) &&
    slaptažodis.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/) &&
    slaptažodis === pakartotinasSlaptažodis) {
    document.getElementById('success-message').innerHTML = 'Sėkmingai užsiregistravote!';
    document.getElementById('success-message').style.display = 'block';
    forma.elements['vardas'].value = '';
    forma.elements['elpastas'].value = '';
    forma.elements['amzius'].value = '';
    forma.elements['telefono-numeris'].value = '';
    forma.elements['slaptažodis'].value = '';
    forma.elements['pakartotinas-slaptažodis'].value = '';
  } else {
    document.getElementById('success-message').style.display = 'none';
  }
});