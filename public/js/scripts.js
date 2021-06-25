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

    let rangoCorrecto = AnyoFecha == AnyoHoy && MesFecha == MesHoy && DiaFecha >= DiaHoy;
    
    if(txtFecha.value.trim()==="" || !rangoCorrecto ){
        txtFecha.style.border="solid red";
        if(txtFecha.value.trim()===""){
            arregloDeErrores.push("Debe Completar la fecha");
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