function calculateDaysBetweenDates(begin, end) {
  var date1 = new Date(begin);
  var date2 = new Date(end);
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}

function clock() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1; //January is 0!
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = "0" + dd;
  }
  if (mm < 10) {
    mm = "0" + mm;
  }
  today = mm + "/" + dd + "/" + yyyy;
  document.getElementById("fecha").innerHTML = today;
  console.log("Fecha: " + today);
}

clock();

calculateDaysBetweenDates("2019-01-01", "2019-01-31");
console.log("Dias: " + calculateDaysBetweenDates("2019-01-01", "2019-01-31"));

function kgToLbs(kg) {
  var lbs = kg * 2.2046226218;
  return lbs;
}

function comprobarDNI(dni) {
  var numero;
  var letr;
  var letra;
  var expresion_regular_dni;
  expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
  if (expresion_regular_dni.test(dni) == true) {
    numero = dni.substr(0, dni.length - 1);
    letr = dni.substr(dni.length - 1, 1);
    numero = numero % 23;
    letra = "TRWAGMYFPDXBNJZSQVHLCKET";
    letra = letra.substring(numero, numero + 1);
    if (letra != letr.toUpperCase()) {
      return false;
    } else {
      document.getElementById("resultado").innerHTML = "DNI correcto";
      return;
    }
  } else {
    return false;
  }
}

function nuemroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
