/* API PARA PRUEBA DE USUARIOS */
fetch('https://reqres.in/api/users')
.then(response => response.json())
.then(json => {
    console.log(json.data);
    const markup = json.data.map(el => {
        return `
        <li class="card-container">
            <div class="image-container">
              <img class="round" src="${el.avatar}">
            </div>

             <div class="name-container"> 
                 <span class="firstName">${el.first_name}</span>
                 <span class="lastName">${el.last_name}</span>
             </div> 
            </li>
        `
    });
    console.log(markup);
    document.querySelector('.list-container').innerHTML = markup.join('');
  
})
// formulario
const formularioUsuarios = document.getElementById('cotizacion');

const usuarios = []

formularioUsuarios.addEventListener('submit', (event) => {
  event.preventDefault()

  usuarios.push({
    nombre: formularioUsuarios.nombre.value,
    apellido: formularioUsuarios.apellido.value,
    email: formularioUsuarios.email.value,
    tamaño: formularioUsuarios.tamaño.value,
    peso: formularioUsuarios.peso.value,
    provincia: formularioUsuarios.provincia.value,

  })
  nombre = document.getElementById('nombre').value;
  apellido = document.getElementById('apellido').value;
  email = document.getElementById('email').value;
  tamaño = document.getElementById('tamaño').value;
  peso = document.getElementById('peso').value;
  provincia = document.getElementById('provincia').value;
  costoEnvío = peso * 750; // Cálculo del costo de envío

  document.getElementById('usuariosRespuesta');

    usuariosRespuesta.textContent = ` Hola ${nombre} ${apellido}, muchas gracias por tu consulta, el costo de envío de un paquete ${tamaño} que pesa ${peso} kilogramos y se enviará a ${provincia} es de $${costoEnvío}.`;

  console.log(usuarios)

});
// Menu desplegable

addEventListener("DOMContentLoaded", () => {
  const btn_menu = document.querySelector(".btn_menu")
  btn_menu.addEventListener("click", () => {
    const menu_items = document.querySelector(".menu_items")
    menu_items.classList.toggle("show")
  })

})


