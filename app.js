function encriptar(elemento) {
  let tex_encriptar = document.getElementById(elemento).value;
  let mayus = false;

  tex_encriptar = tex_encriptar.split("");

  for (let i = 0; i < tex_encriptar.length; i++) {
    if (es_munuscula(tex_encriptar[i])) {
    } else {
      mayus = true;
      console.log(mayus);
      break;
    }
  }
  for (let i = 0; i < tex_encriptar.length; i++) {
    if (mayus == false) {
      if (tex_encriptar[i] == "a") {
        tex_encriptar[i] = "ai";
      } else if (tex_encriptar[i] == "e") {
        tex_encriptar[i] = "enter";
      } else if (tex_encriptar[i] == "i") {
        tex_encriptar[i] = "imes";
      } else if (tex_encriptar[i] == "o") {
        tex_encriptar[i] = "ober";
      } else if (tex_encriptar[i] == "u") {
        tex_encriptar[i] = "ufat";
      }
      let result = tex_encriptar.join("");

      let mostrar = document.getElementById("texto_encriptado");
      mostrar.innerHTML = result;
      document.getElementById("texto_encriptado").style.display = "block";
      document.getElementById("boton_copiar").style.display = "block";
      document.getElementById("imagen").style.display = "none";
      document.getElementById("mensaje_no_encontrado").style.display = "none";
      document.getElementById("svg-text").style.fill = "rgba(73, 80, 87, 1)";
    } else {
      document.getElementById("svg-text").style.fill = "red";
      break;
    }
  }
}

function copiar(elemento) {
  var aux = document.createElement("input");

  aux.setAttribute("value", document.getElementById(elemento).innerHTML);

  document.body.appendChild(aux);

  aux.select();

  document.execCommand("copy");
  document.body.removeChild(aux);

  alert("Copiado");
}

function desencriptar(elemento) {
  let tex_desencriptar = document.getElementById(elemento).value;
  let mayus = false;

  tex_desencriptar = tex_desencriptar.split("");

  for (let i = 0; i < tex_desencriptar.length; i++) {
    if (es_munuscula(tex_desencriptar[i])) {
    } else {
      mayus = true;
      console.log(mayus);
      break;
    }
  }

  for (let i = 0; i < tex_desencriptar.length; i++) {
    if (mayus == false) {
      if (tex_desencriptar[i] == "a") {
        tex_desencriptar.splice(i + 1, 1);
      }

      if (tex_desencriptar[i] == "e") {
        tex_desencriptar.splice(i + 1, 4);
      }

      if (tex_desencriptar[i] == "i") {
        tex_desencriptar.splice(i + 1, 3);
      }

      if (tex_desencriptar[i] == "o") {
        tex_desencriptar.splice(i + 1, 3);
      }

      if (tex_desencriptar[i] == "u") {
        tex_desencriptar.splice(i + 1, 3);
      }
      let result = tex_desencriptar.join("");

      let mostrar = document.getElementById("texto_encriptado");
      mostrar.innerHTML = result;
      document.getElementById("texto_encriptado").style.display = "block";
      document.getElementById("boton_copiar").style.display = "block";
      document.getElementById("imagen").style.display = "none";
      document.getElementById("mensaje_no_encontrado").style.display = "none";
      document.getElementById("svg-text").style.fill = "rgba(73, 80, 87, 1)";
    } else {
      document.getElementById("svg-text").style.fill = "red";
      break;
    }
  }
}

document.getElementById("texto_encriptado").style.display = "none";

document.getElementById("boton_copiar").style.display = "none";

function es_munuscula(car) {
  let mayuscula =
    ("a".charCodeAt(0) <= car.charCodeAt(0) &&
      "z".charCodeAt(0) >= car.charCodeAt(0)) ||
    " ".charCodeAt(0) == car.charCodeAt(0) ||
    "ñ".charCodeAt(0) == car.charCodeAt(0);

  return mayuscula;
}
