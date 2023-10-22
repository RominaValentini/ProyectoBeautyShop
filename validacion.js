function validarFormulario(event) {
  event.preventDefault();

  var nombre = document.getElementById("nombre").value.trim();
  var apellido = document.getElementById("apellido").value.trim();
  var email = document.getElementById("email").value.trim();
  var telefono = document.getElementById("telefono").value.trim();
  var seccion = document.getElementById("seccion").value.trim();
  var codigodelproducto = document.getElementById("codigo").value.trim();
  var mensaje = document.getElementById("mensaje").value.trim();


  if (nombre === " " || apellido === " " || email === " " || telefono === " " || seccion === " " || codigodelproducto === " " || mensaje === " ") {
    alert("Por favor, complete todos los campos del formulario.");
    return false;

  }

  for (var i = 0; i < nombre.length; i++) {
    var charCode = nombre.charCodeAt(i);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'nombre' solo puede contener caracteres alfabéticos y espacios.");
      return false;
    }
  }

  for (var f = 0; f < apellido.length; f++) {
    var charCode = apellido.charCodeAt(f);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'apellido' solo puede contener caracteres alfabéticos y espacios.");
      return false;
    }
  }


  for (var p = 0; i < email.length; i++) {
    var charCode = email.charCodeAt(p);
    if (!((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122) || charCode === 32)) {
      alert("El campo 'email' solo puede contener caracteres alfabéticos y espacios.");
      return false;
    }
  }

  for (var k = 0; j < telefono.length; k++) {
    var digit = telefono.charAt(k);
    if (digit < "0" || digit > "9") {
      alert("El campo 'telefono' solo puede contener dígitos numéricos.");
      return false;
    }
  }


  for (var h = 0; j < codigodelproducto.length; k++) {
    var digit = codigodelproducto.charAt(k);
    if (digit < "0" || digit > "9") {
      alert("El campo 'codigodelproducto' solo puede contener dígitos numéricos.");
      return false;
    }
  }


  alert("Formulario enviado correctamente.");
  return true;
}