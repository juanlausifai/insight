/* ********** Menu ********** */
((d) => {
    const $btnMenu = d.querySelector(".menu-btn"),
      $menu = d.querySelector(".menu");
  
    $btnMenu.addEventListener("click", (e) => {
      $btnMenu.firstElementChild.classList.toggle("none");
      $btnMenu.lastElementChild.classList.toggle("none");
      $menu.classList.toggle("is-active");
    });
  
    d.addEventListener("click", (e) => {
      if (!e.target.matches(".menu a")) return false;
  
      $btnMenu.firstElementChild.classList.remove("none");
      $btnMenu.lastElementChild.classList.add("none");
      $menu.classList.remove("is-active");
    });
  })(document);



  /*LOGICA DE FORMULARIO */

const button = document.getElementById("buttonEnviar");
const txtApellido = document.getElementById("txtApellido");
const txtNombre = document.getElementById("txtNombre");
const txtEmail = document.getElementById("txtEmail");
const txtEdad = document.getElementById("txtEdad");
const txtFecha = document.getElementById("txtFecha");
const txtObservacion = document.getElementById("txtObservacion");
const sectionErrores = document.getElementById("sectionErrores");
const divListadoErrores = document.getElementById("listadoErrores");



button.addEventListener('click', envioFormulario);

let arregloDeErrores=[];
let errorFormulario = false;

function envioFormulario(){
    errorFormulario = false;
    arregloDeErrores=[];
    controlTxtApellido();
    controltxtNombre();
    controltxtEmail();
    controltxtEdad();
    controltxtFecha();

    

    divListadoErrores.innerHTML="";
    if(!errorFormulario){
        correoEnviado();
    }else{
      divListadoErrores.style.color="white";
      divListadoErrores.style.background="#C61515";
      divListadoErrores.style.padding="15px";
      divListadoErrores.style.borderRadius="15px";
      divListadoErrores.style.fontWeight="500";
      divListadoErrores.style.transition= "all 500ms ease-out";
      
        for (let i = 0; i < arregloDeErrores.length; i++) {
            const element = arregloDeErrores[i];
            divListadoErrores.innerHTML += `<li>${element}</li>`;
            
        }
        
    }
    
}

function controlTxtApellido(){
    if(txtApellido.value.trim()==="" ){
        txtApellido.style.border="solid red";
        arregloDeErrores.push("Debe Completar el apellido");
        errorFormulario=true;
    }else{
        txtApellido.style.border=""; 
         
    }
}
function controltxtNombre(){
    if(txtNombre.value.trim()==="" ){
        txtNombre.style.border="solid red";
        arregloDeErrores.push("Debe Completar el nombre");
        errorFormulario=true;
    }else{
        txtNombre.style.border="";
          
    } 
}

function controltxtEmail(){

  const expresionRegular=/^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  let formatoCorrecto=expresionRegular.exec(txtEmail.value);

  if(txtEmail.value.trim()==="" || !formatoCorrecto ){
    if(txtEmail.value.trim()===""){
      txtEmail.style.border="solid red";
      arregloDeErrores.push("Debe Completar el Email");
    }
    if(!formatoCorrecto){
      txtEmail.style.border="solid red";
      arregloDeErrores.push("El formato de email es incorrecto");
    }  
      errorFormulario=true;
  }else{
      txtEmail.style.border="";
        
  } 
}



function controltxtFecha(){
    let hoy = new Date();
    let fechaIngresada = txtFecha.value.split("-");

    let AnyoFecha = fechaIngresada[0];
    let MesFecha = fechaIngresada[1]-1;
    let DiaFecha = fechaIngresada[2];
    
    let AnyoHoy = hoy.getFullYear();
    let MesHoy = hoy.getMonth();
    let DiaHoy = hoy.getDate();

    let rangoCorrecto = (AnyoFecha == AnyoHoy && MesFecha == MesHoy && DiaFecha >= DiaHoy) 
    || (AnyoFecha == AnyoHoy && MesFecha > MesHoy)||AnyoFecha > AnyoHoy;
    
    

        
    
    if(txtFecha.value.trim()==="" || !rangoCorrecto ){
        txtFecha.style.border="solid red";
        if(txtFecha.value.trim()===""){
            arregloDeErrores.push("Debe Completar la fecha con un valor correcto");
        }
        if(!rangoCorrecto){
            arregloDeErrores.push(`La fecha debe ser igual o mayor a la fecha de hoy`);
        }
        errorFormulario=true;
    }else{
        txtFecha.style.border="";
           
    } 
}
function controltxtEdad(){
    let edadCorrecta = txtEdad.value>=6 && txtEdad.value<=100;
    if(txtEdad.value.trim()==="" || !edadCorrecta){
        txtEdad.style.border="solid red";
        if(txtEdad.value.trim()===""){
            arregloDeErrores.push("Debe Completar la edad");
        }
        if(!edadCorrecta){
            arregloDeErrores.push("El rango de edad debe estar entre 6 y 100 años");
        }
        errorFormulario=true;
    }else{
        txtEdad.style.border="";
         
    } 
}



function correoEnviado(){
    
  divListadoErrores.innerHTML="Enviado con éxito!";
    
  divListadoErrores.style.color="white";
  divListadoErrores.style.background="#11A302";
  divListadoErrores.style.padding="15px";
  divListadoErrores.style.borderRadius="15px";
  divListadoErrores.style.fontWeight="500";
  divListadoErrores.style.transition= "all 500ms ease-out";

    txtApellido.value="";
    txtNombre.value="";
    txtEmail.value="";
    txtEdad.value="";
    txtFecha.value="";
    txtObservacion.value="";
}


 const radioSi = document.getElementById("radioSi");
 const buttonCuestionario = document.getElementById("buttonCuestionario");
 const radioNo = document.getElementById("radioNo");
 const primerFormulario = document.getElementById("primerFormulario");
 const segundoFormulario = document.getElementById("segundoFormulario");
 const buttonEnviarDos = document.getElementById("buttonEnviarDos");
 const buttonRegresar = document.getElementById("buttonRegresar");




 buttonEnviarDos.addEventListener('click', envioFormularioDos);
 buttonRegresar.addEventListener('click', volverPrimerFormulario);
 radioNo.addEventListener('click', mostrarBotonEnviar);
 
 segundoFormulario.style.display="none";
 buttonCuestionario.style.display="none";
 button.style.display="none";

 radioSi.addEventListener('click', mostrarBotonCuestionario);
 buttonCuestionario.addEventListener('click', nuevoFormulario); 

 function mostrarBotonEnviar(){
    button.style.display="";
    buttonCuestionario.style.display="none";
 }
 
 function mostrarBotonCuestionario(){
    button.style.display="none"
    buttonCuestionario.style.display="";
 }

 function nuevoFormulario(){
     
    errorFormulario = false;
    arregloDeErrores=[];
    controlTxtApellido();
    controltxtNombre();
    controltxtEmail();
    controltxtEdad();
    controltxtFecha();

    divListadoErrores.innerHTML="";
    if (errorFormulario) {
      divListadoErrores.style.color="white";
      divListadoErrores.style.background="#C61515";
      divListadoErrores.style.padding="15px";
      divListadoErrores.style.borderRadius="15px";
      divListadoErrores.style.fontWeight="500";
      divListadoErrores.style.transition= "all 500ms ease-out";
      
        for (let i = 0; i < arregloDeErrores.length; i++) {
            const element = arregloDeErrores[i];
            divListadoErrores.innerHTML += `<li>${element}</li>`;
            
        }
    } else {
        primerFormulario.style.display="none";
        segundoFormulario.style.display="";
        divListadoErrores.style.background="white";  
    }
    
    
    
    
 }

 function volverPrimerFormulario(){

    primerFormulario.style.display="";
    segundoFormulario.style.display="none";
    radioSi.checked = false;
    buttonCuestionario.style.display="none";
    divListadoErrores.innerHTML="";
    divListadoErrores.style.background="white";
 }




 function envioFormularioDos(){

    errorFormulario = false;
    arregloDeErrores=[];

    

    const preguntaUnoOpcionUno=document.getElementById("preguntaUnoOpcionUno");
    const preguntaUnoOpcionDos=document.getElementById("preguntaUnoOpcionDos");
    const preguntaUnoOpcionTres=document.getElementById("preguntaUnoOpcionTres");
    
    const preguntaDosOpcionUno=document.getElementById("preguntaDosOpcionUno");
    const preguntaDosOpcionDos=document.getElementById("preguntaDosOpcionDos");
    const preguntaDosOpcionTres=document.getElementById("preguntaDosOpcionTres");

    const preguntaTresOpcionUno=document.getElementById("preguntaTresOpcionUno");
    const preguntaTresOpcionDos=document.getElementById("preguntaTresOpcionDos");
    const preguntaTresOpcionTres=document.getElementById("preguntaTresOpcionTres");

    const preguntaCuatroOpcionUno=document.getElementById("preguntaCuatroOpcionUno");
    const preguntaCuatroOpcionDos=document.getElementById("preguntaCuatroOpcionDos");
    const preguntaCuatroOpcionTres=document.getElementById("preguntaCuatroOpcionTres");

    const preguntaCincoOpcionUno=document.getElementById("preguntaCincoOpcionUno");
    const preguntaCincoOpcionDos=document.getElementById("preguntaCincoOpcionDos");
    const preguntaCincoOpcionTres=document.getElementById("preguntaCincoOpcionTres");
    
    
    let preguntaUnoCorrecta=preguntaUnoOpcionUno.checked 
        || preguntaUnoOpcionDos.checked || preguntaUnoOpcionTres.checked;
    

    let preguntaDosCorrecta=preguntaDosOpcionUno.checked 
    || preguntaDosOpcionDos.checked || preguntaDosOpcionTres.checked;

    let preguntaTresCorrecta=preguntaTresOpcionUno.checked 
    || preguntaTresOpcionDos.checked || preguntaTresOpcionTres.checked;

    let preguntaCuatroCorrecta=preguntaCuatroOpcionUno.checked 
    || preguntaCuatroOpcionDos.checked || preguntaCuatroOpcionTres.checked;

    let preguntaCincoCorrecta=preguntaCincoOpcionUno.checked 
    || preguntaCincoOpcionDos.checked || preguntaCincoOpcionTres.checked;

    
   


    if(!preguntaUnoCorrecta) {
        arregloDeErrores.push("Debe Completar la pregunta uno");
        errorFormulario=true;
        }

    if(!preguntaDosCorrecta) {
        arregloDeErrores.push("Debe Completar la pregunta dos");
        errorFormulario=true;
        }    
        
    if(!preguntaTresCorrecta) {
        arregloDeErrores.push("Debe Completar la pregunta tres");
        errorFormulario=true;
        }
        
    if(!preguntaCuatroCorrecta) {
        arregloDeErrores.push("Debe Completar la pregunta cuatro");
        errorFormulario=true;
        }
        
    if(!preguntaCincoCorrecta) {
        arregloDeErrores.push("Debe Completar la pregunta cinco");
        errorFormulario=true;
        }   
        
    

    divListadoErrores.innerHTML="";
    if(!errorFormulario){
        correoEnviado();
        primerFormulario.style.display="";
        segundoFormulario.style.display="none";
        radioSi.checked = false;
        buttonCuestionario.style.display="none";

         preguntaUnoOpcionUno.checked=false;
         preguntaUnoOpcionDos.checked=false;
         preguntaUnoOpcionTres.checked=false;
        
         preguntaDosOpcionUno.checked=false;
         preguntaDosOpcionDos.checked=false;
         preguntaDosOpcionTres.checked=false;
    
         preguntaTresOpcionUno.checked=false;
         preguntaTresOpcionDos.checked=false;
         preguntaTresOpcionTres.checked=false;
    
         preguntaCuatroOpcionUno.checked=false;
         preguntaCuatroOpcionDos.checked=false;
         preguntaCuatroOpcionTres.checked=false;
    
         preguntaCincoOpcionUno.checked=false;
         preguntaCincoOpcionDos.checked=false;
         preguntaCincoOpcionTres.checked=false;

    }else{
      divListadoErrores.style.color="white";
      divListadoErrores.style.background="#C61515";
      divListadoErrores.style.padding="15px";
      divListadoErrores.style.borderRadius="15px";
      divListadoErrores.style.fontWeight="500";
      divListadoErrores.style.transition= "all 500ms ease-out";
      
        for (let i = 0; i < arregloDeErrores.length; i++) {
            const element = arregloDeErrores[i];
            divListadoErrores.innerHTML += `<li>${element}</li>`;
            
        }
        
    }

    divListadoErrores.style.transition= "all 500ms ease-out";

 }

 