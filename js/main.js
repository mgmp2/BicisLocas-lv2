document.getElementById("registrar").addEventListener("click", function (e){
  e.preventDefault();
  validateForm();

})
function validateForm(){

    var nom   = document.getElementById("name");
    var ap    = document.getElementById("lastname");
    var email = document.getElementById("input-email");
    var pas   = document.getElementById("input-password");
    // var op    = document.getElementById("opciones");

    var expRegName  = /^([A-Z]{1}[a-z]+[\s]*)+$/g;
    var expRegLast  = /[A-Z]{1}([a-z]{2,12})+\s([A-Z]+([a-z]{2,10}))/g;
    var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var expRegPass  = /^[a-zA-z]{6,}$/;
    var cont = 0;

    //Name
    if(!expRegName.test(nom.value)|| nom.value ==""){
      var mens ="Escribir correctamente \nCampo nombre: empezando por Mayúscula";
      createTooltip(nom.parentNode,mens);
      cont++;
    }

    //Last Name
    if(!expRegLast.test(ap.value)){
      var mens ="Escribir correctamente \nCampo apellido: Sus dos apellidos empezando por Maýucula";
      createTooltip(ap.parentNode,mens);
      cont++;
    }

    //Email
    if(!expRegEmail.test(email.value)){
          var mens = "Escribir correctamente \nCampo email de manera correcta";
          createTooltip(email.parentNode, mens);
          cont++;
    }

    //Password
    if(!expRegPass.test(pas.value) || pas.value == "123456" || pas.value == "098754" || pas.value == ""){
        var mens = "Escribir correctamente \nCampos de contraseña diferente de: 123456 o 98754";
        createTooltip(pas.parentNode, mens);
        cont++;
    }

    else if(cont == 0){
      alert("Muy bien \n Lleno los datos correctamente");

    }
}

function createTooltip(padre,mensaje){
  // var padre   = document.getElementById("name").parentNode; se debe traer

  var span = document.createElement("span");
  span.innerHTML = mensaje;
  span.setAttribute("class","tooltiptext");
  padre.appendChild(span);
}
