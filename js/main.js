  var nom   = document.getElementById("name");
  var ap    = document.getElementById("lastname");
  var email = document.getElementById("input-email");
  var pas   = document.getElementById("input-password");
  var op    = document.getElementById("opciones");

  var expRegName  = /^([A-Z]{1}[a-z]+[\s]*)+$/;
  var expRegLast  = /^[A-Z]{1}([a-z]{2,12})+\s([A-Z]{1}([a-z]{2,12}))/;
  var expRegEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  var expRegPass  = /^[a-zA-z0||1||2||4||3||5||6||7||8||9||10||11]{6,}$/;
  var mens ="";
  document.getElementById("registrar").addEventListener("click", function (e){
    e.preventDefault();
      var mensA;
      var form = document.getElementById("box-form");
      var hijos =form.children;
      for(var i=1; i<hijos.length; i++){
        var div = hijos[i].getAttribute("class");
        var array = div.split(" ");
        if(array[1] =="input-box"){
          if(hijos[i].lastElementChild.getAttribute("class") =="tooltiptext inactive"){
            console.log(hijos[i].lastElementChild.getAttribute("class"));
              mensA = "Todo correcto";
          } else if(!nom.value || !ap.value || !email.value ||!pas.value || op.value =="0"){
            mensA ="Se debe llenar todos los datos";
        } else {
          mensA = "Todo correcto";
        }
        }

    }
    alert(mensA);

  })

  window.addEventListener("load", function (){
    nom.addEventListener("blur",function(){ validationCorrect(nom,expRegName,  "Debe ingresar su nombre", "Debe empezar por Mayúscula"); });
      ap.addEventListener("blur",function(){ validationCorrect(ap,expRegLast,  "Debe ingresar su apellido", "Debe contener sus dos apellidos empezando por Maýucula"); });
    email.addEventListener("blur",function(){ validationCorrect(email,expRegEmail,  "Debe ingresar su email", "Verifique su e-mail"); });
      pas.addEventListener("blur",function(){
        validationCorrect(pas,expRegPass,  "Debe ingresar su contraseña", "Debe tener al menos seis carácteres y sólo caracteres");
        });
    op.addEventListener("blur",function(){
      var padre =op.parentNode;
      if(op.value =="0"){
        mens="Debe seleccionar al menos un tipo de bici";
        if(padre.lastElementChild.getAttribute("class") =="tooltiptext"){
            padre.lastElementChild.classList.add("inactive");
            padre.lastElementChild.innerHTML = mens;
        } else {
          var span = document.createElement("span");
          span.setAttribute("class","tooltiptext");
          span.innerHTML = mens;
          padre.appendChild(span);
        }
      } else if(padre.lastElementChild.getAttribute("class") =="tooltiptext"){
          padre.lastChild.classList.add("inactive");
        }
    });

  });

  function validationCorrect(inputL,expReg,mensaje1,mensaje2){
              var padre = inputL.parentNode;
              if(!expReg.test(inputL.value)){

                (!inputL.value ||inputL.value =="") ? mens = mensaje1 : mens =mensaje2;
                if(padre.lastElementChild.getAttribute("class") =="tooltiptext"){
                    padre.lastElementChild.innerHTML = mens;
                } else  {
                  var span = document.createElement("span");
                  span.setAttribute("class","tooltiptext");
                  span.innerHTML = mens;
                  padre.appendChild(span);
                }
              } else if(expReg.test(inputL.value)){
                if(padre.lastElementChild.getAttribute("class") =="tooltiptext"){
                  //  && padre.lastElementChild.getAttribute("class") =="tooltiptext"
                  padre.lastElementChild.classList.add("inactive");
              } }
  }
  function createTooltip(padre,mensaje){
    if(padre.lastElementChild.getAttribute("class") =="tooltiptext"){
      padre.lastElementChild.innerHTML = mensaje;
    }else{
      var span = document.createElement("span");
      span.setAttribute("class","tooltiptext");
      span.innerHTML = mensaje;
      padre.appendChild(span);
    }
  }
