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

function calculadora() {
  var numero1 = document.getElementById("numero1").value;
  var numero2 = document.getElementById("numero2").value;
  var operacion = document.getElementById("operacion").value;
  var resultado = 0;
  if (operacion == "suma") {
    resultado = parseInt(numero1) + parseInt(numero2);
  } else if (operacion == "resta") {
    resultado = parseInt(numero1) - parseInt(numero2);
  } else if (operacion == "multiplicacion") {
    resultado = parseInt(numero1) * parseInt(numero2);
  } else if (operacion == "division") {
    resultado = parseInt(numero1) / parseInt(numero2);
  }
  document.getElementById("resultado").innerHTML = resultado;
}

function darkMode() {
  var body = document.getElementsByTagName("body")[0];
  var bodyClass = body.className;
  if (bodyClass == "dark") {
    body.className = "";
  } else {
    body.className = "dark";
  }
}

function listadoDeNumerosPrimos() {
  var numero = document.getElementById("numero").value;
  var resultado = "";
  for (var i = 1; i <= numero; i++) {
    var esPrimo = true;
    for (var j = 2; j < i; j++) {
      if (i % j == 0) {
        esPrimo = false;
      }
    }
    if (esPrimo) {
      resultado += i + " ";
    }
  }
  document.getElementById("resultado").innerHTML = resultado;
}

expresion_regular_dni = /^\d{8}[a-zA-Z]$/;
expresion_regular_CIF = /^[A-HJ-NP-SUVW]\d{7}[A-J]$/;
expresion_regular_email =
  /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

lamda = (x) => {
  comprobarDNI(x);
};

// crear una funcion que calcule los 20 primeros numeros primos
function primos() {
  var resultado = "";
  for (var i = 1; i <= 20; i++) {
    var esPrimo = true;
    for (var j = 2; j < i; j++) {
      if (i % j == 0) {
        esPrimo = false;
      }
    }
    if (esPrimo) {
      resultado += i + " ";
    }
  }
  console.log(resultado);
}

primos();
