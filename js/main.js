document.getElementById("registrar").addEventListener("click", function (e){
  e.preventDefault();
  validateForm();
})
function validateForm(){

    var nom   = document.getElementById("name");
    var ap    = document.getElementById("lastname");
    var email = document.getElementById("input-email");
    var pas   = document.getElementById("input-password");
    var op    = document.getElementById("opciones");

    var expRegName  = /^([A-Z]{1}[a-z]+[\s]*)+$/g;
    var expRegLast  = /[A-Z]{1}([a-z]{2,12})+\s([A-Z]+([a-z]{2,10}))/g;
    var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var expRegPass  = /^[a-zA-z]{6,}$/;
    var mens ="";
    var cont = 0;

    //Name
    if(!expRegName.test(nom.value)|| nom.value ==""){
      (!nom.value) ? mens = "Debe ingresar su nombre" : mens ="Debe empezar por Mayúscula";
      createTooltip(nom.parentNode,mens);
      cont++;
    }

    //Last Name
    if(!expRegLast.test(ap.value)){
      (!ap.value) ? mens ="Debe ingresar su apellido" : mens="Debe contener sus dos apellidos empezando por Maýucula";
      createTooltip(ap.parentNode,mens);
      cont++;
    }

    //Email
    if(!expRegEmail.test(email.value)){
      (!email.value) ? mens="Debe ingresar su email" : mens = "Verifique su e-mail";
          createTooltip(email.parentNode, mens);
          cont++;
    }

    //Password
    if(!expRegPass.test(pas.value) || pas.value == "123456" || pas.value == "098754"){
        (!pas.value)? mens="Debe ingresar su contraseña" :mens = "La contraseña debe tener al menos seis carácteres";
        createTooltip(pas.parentNode, mens);
        cont++;
    }if(op.value=="0"){
        mens="Debe seleccionar al menos un tipo de bici";
        createTooltip(op.parentNode, mens);
        cont++;

    } if(cont == 0){
      validationCorrect();
        alert("Muy bien \n Lleno los datos correctamente");

    }
}

function createTooltip(padre,mensaje){
  // var padre   = document.getElementById("name").parentNode; se debe traer


  if(padre.lastElementChild.getAttribute("class") =="tooltiptext"){
    padre.lastElementChild.innerHTML = mensaje;
  }else{
    var span = document.createElement("span");
    span.setAttribute("class","tooltiptext");
    span.innerHTML = mensaje;
    padre.appendChild(span);
  }
}
function validationCorrect(){
  var form = document.getElementById("box-form");
  var hijos =form.children;
  for(var i=1; i<hijos.length; i++){
    var clase = hijos[i].getAttribute("class");
    var array = clase.split(" ");
      if(array[1]=="input-box"){
        hijos[i].lastChild.classList.add("inactive");
      }
  }
}
