document.getElementById("registrar").addEventListener("click", function (e){
  e.preventDefault();
  validateForm();
})
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

window.addEventListener("load", function (){
  nom.addEventListener("blur",function(){
    validationCorrect(nom,expRegName,  "Debe ingresar su nombre", "Debe empezar por Mayúscula");
    });
    ap.addEventListener("blur",function(){
      validationCorrect(ap,expRegLast,  "Debe ingresar su apellido", "Debe contener sus dos apellidos empezando por Maýucula");
      });
  email.addEventListener("blur",function(){
    validationCorrect(email,expRegEmail,  "Debe ingresar su email", "Verifique su e-mail");
    });
    pas.addEventListener("blur",function(){
      validationCorrect(pas,expRegPass,  "Debe ingresar su contraseña", "La contraseña debe tener al menos seis carácteres");
      });
  op.addEventListener("blur",function(){
    if(op.value=="0"){
      mens="Debe seleccionar al menos un tipo de bici";
      createTooltip(op.parentNode, mens);
      cont++;
    }
  });


  // validationCorrect(op,,  "Debe ingresar su nombre", "Debe empezar por Mayúscula");

});

function validationCorrect(inputL,expReg,mensaje1,mensaje2){
          var padre = inputL.parentNode;
          if(!expReg.test(inputL.value)|| inputL.value ==""){
            var form = document.getElementById("box-form");
            var hijos =form.children;
            (!inputL.value) ? mens = mensaje1 : mens =mensaje2;
            if(padre.lastElementChild.getAttribute("class") =="tooltiptext"){
              console.log(clase);
              var clase = padre.lastElementChild.getAttribute("class");
              if(clase=="tooltiptext"){
                padre.lastElementChild.classList.add("inactive");
                padre.lastElementChild.innerHTML = mens;
              }
            } else {
              var span = document.createElement("span");
              span.setAttribute("class","tooltiptext");
              span.innerHTML = mens;
              padre.appendChild(span);
            }
          }
          if(expReg.test(inputL.value)){
            padre.lastChild.classList.add("inactive");
          }
      // hijos[i].lastChild.classList.add("inactive");
}

function validateForm(){
    //Name
    // if(!expRegName.test(nom.value)|| nom.value ==""){
    //   (!nom.value) ? mens = "Debe ingresar su nombre" : mens ="Debe empezar por Mayúscula";
      // onBlur(nom, mens);
      // createTooltip(nom.parentNode,mens);

      // cont++;
    // }

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



// function onBlur(hijo,mensaje){
//
//
//   // createTooltip(nom.parentNode,mens);
//   hijo.addEventListener("blur",function(){
//   var padre = hijo.parentNode;
//   if(padre.lastElementChild.getAttribute("class") =="tooltiptext"){
//     padre.lastElementChild.innerHTML = mensaje;
//   }else{
//     var span = document.createElement("span");
//     span.setAttribute("class","tooltiptext");
//     span.innerHTML = mensaje;
//     console.log(mensaje);
//     padre.appendChild(span);
//   }
// });
// }
