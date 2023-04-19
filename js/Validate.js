function cargarDatos() {
  let name = document.getElementById("name").value;
  let email = document.getElementById ("email").value;
  let phone = document.getElementById ("phone").value;
  let message = document.getElementById ("message").value;

  let tabla = document.getElementById("tablaFormulario");
  let fila = tabla.insertRow(tabla.length);
  let cName = fila.insertCell(0);
  let cEmail = fila.insertCell(1);
  let cPhone = fila.insertCell(2);
  let cMessage = fila.insertCell(3);
  cName.innerHTML = name;
  cEmail.innerHTML = email;
  cPhone.innerHTML = phone;
  cMessage.innerHTML = message;

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
  
} 