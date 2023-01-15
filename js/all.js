//Solicitar datos de la API
async function datosCV(){
    try {
        const URL = 'https://randomuser.me/api/?gender=male&exc=login,registered,phone,id'
        const respuesta = await fetch(URL)
        const { results } = await respuesta.json();
        const datos =  results[0]

        console.log(datos)
        document.getElementById('foto-perfil').src = datos.picture.large
        document.getElementById('nombreCV').innerHTML = datos.name.first+' '+datos.name.last;
        document.getElementById('emailCV').innerHTML = datos.email
        document.getElementById('celCV').innerHTML = datos.cell
        document.getElementById('addressCV').innerHTML = 
        datos.location.country+', '+
        datos.location.city+', '+
        datos.location.state+' | '+
        datos.location.street.name+' '+
        datos.location.street.number;
    }
    
    catch (error){
        console.log(error)
    }
}   datosCV()

//Botón para desplegar la pestaña descripción
var descbtn = document.getElementById('dbutton');
var descbtnstate = false;

descbtn.addEventListener('click', function(){
    if(descbtnstate == false) {
        document.getElementById('desc-text').style.display = 'block';
        descbtn.innerHTML = '▲';
        descbtnstate = true;
    } else {
        document.getElementById('desc-text').style.display = 'none';
        descbtn.innerHTML = '▼';
        descbtnstate = false
    }
})

//Botón para desplegar la pestaña conocimientos
var cbutton = document.getElementById('c-button');
var cbuttonstate = false;

cbutton.addEventListener('click', function() {
    if(cbuttonstate == false) {
        document.getElementById('c-text').style.transform = 'translateX(0)';
        document.getElementById('c-list').style.transform = 'translateX(0)';
        document.getElementById('Conocimiento-text').style.transition = 'opacity 0.25s ease';
        document.getElementById('Conocimiento-text').style.opacity = '0';
        cbutton.value = '<';
        cbuttonstate = true;
    } else {
        document.getElementById('c-text').style.transform = 'translateX(-87%)';
        document.getElementById('c-list').style.transform = 'translateX(-100%)';
        document.getElementById('Conocimiento-text').style.transition = 'opacity 0.25s ease 0.5s';
        document.getElementById('Conocimiento-text').style.opacity = '1';
        cbuttonstate = false;
        cbutton.value = '>';
    } 
})

//Botón para desplegar la pestaba aptitudes
var abutton = document.getElementById('a-button')
var abuttonstate = false;

abutton.addEventListener('click', function() {
    if(abuttonstate == false) {
        document.getElementById('a-text').style.transform = 'translateX(0)';
        document.getElementById('a-list').style.transform = 'translateX(0)';
        document.getElementById('Aptitudes-text').style.transition = 'opacity 0.25s ease';
        document.getElementById('Aptitudes-text').style.opacity = '0';
        abuttonstate = true;
        abutton.value = '<'
    } else {
        document.getElementById('a-text').style.transform = 'translateX(-87%)';
        document.getElementById('a-list').style.transform = 'translateX(-100%)';
        document.getElementById('Aptitudes-text').style.transition = 'opacity 0.25s ease 0.5s';
        document.getElementById('Aptitudes-text').style.opacity = '1';
        abuttonstate = false;
        abutton.value = '>'
    } 
})

//Botón para desplegar la pestaña experiencias
var expbutton = document.getElementById('exp-button')
var expbuttonstate = false;

expbutton.addEventListener('click', function() {
    if(expbuttonstate == false) {
        document.getElementById('exp-text').style.transform = 'translateX(0)';
        document.getElementById('exp-list').style.transform = 'translateX(0)';
        document.getElementById('Experiencias-text').style.transition = 'opacity 0.25s ease';
        document.getElementById('Experiencias-text').style.opacity = '0';
        expbuttonstate = true;
        expbutton.value = '<'
    } else {
        document.getElementById('exp-text').style.transform = 'translateX(-87%)';
        document.getElementById('exp-list').style.transform = 'translateX(-100%)';
        document.getElementById('Experiencias-text').style.transition = 'opacity 0.25s ease 0.5s';
        document.getElementById('Experiencias-text').style.opacity = '1';
        expbuttonstate = false;
        expbutton.value = '>'
    } 
})

//Desplegar formulario
var formbutton = document.getElementById('form-button');
var formstate = false;

formbutton.addEventListener('click', function(){
    if(formstate == false) {
        document.getElementById('email-form').style.display = 'flex';
        formbutton.style.borderRadius = '20px 20px 0px 0px';
        formbutton.innerHTML = '<img src="img/email-send-icon.png" alt="sendemail-icon" id="sendemail-icon">Envíame un email ▲';
        formstate = true;
    } else {
        document.getElementById('email-form').style.display = 'none';
        formbutton.style.borderRadius = '20px 20px 20px 20px';
        formbutton.innerHTML = '<img src="img/email-send-icon.png" alt="sendemail-icon" id="sendemail-icon">Envíame un email ▼';
        formstate = false;
    }
})