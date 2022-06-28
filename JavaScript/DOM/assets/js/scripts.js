const titulo = document.getElementById("page-title");
const btnMode = document.getElementById("mode-selector");
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
btnMode.addEventListener('click', mudarModo);

function mudarModo(){
    mudarTexto();
    mudarClasse();
}

function mudarClasse(){
    titulo.classList.toggle("dark-mode");
    btnMode.classList.toggle("dark-mode");
    body.classList.toggle("dark-mode");
    footer.classList.toggle("dark-mode");
}

function mudarTexto(){
    
    titulo.innerHTML = titulo.innerHTML === "Light Mode ON" ?  "Dark Mode ON" :  "Light Mode ON";
    btnMode.innerHTML = btnMode.innerHTML === "Light Mode" ?  "Dark Mode" :  "Light Mode";
}