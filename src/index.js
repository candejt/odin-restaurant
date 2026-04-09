
import { loadHome } from "./initial-page-load.js";
import { loadMenu } from './menu.js';
import { loadContact } from './contact.js';
import './styles.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const content=document.getElementById('content');

//empty content
function clearContent(){
    content.innerHTML='';
}

//event listeners
document.querySelector('#home-btn').addEventListener('click', ()=>{
    clearContent();
    loadHome();
});

document.querySelector('#menu-btn').addEventListener('click', ()=>{
    clearContent();
    loadMenu();
});

document.querySelector('#contact-btn').addEventListener('click', ()=>{
    clearContent();
    loadContact();
});


loadHome()

