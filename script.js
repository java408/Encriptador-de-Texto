//a - ai
//e - enter
//i - imes
//o - ober
//u - ufat

function encriptar() {
    var texto = document.getElementById('inputTexto').value.toLowerCase();
    //i es para afecte mayusculas como minusculas -- e else{
    //g es para toda la linea u oracion
    //m es para que afecte a multiples lineas o parrafo
    var txtCifrado = texto.replace(/e/igm, "enter");
    var txtCifrado = txtCifrado.replace(/o/igm, "ober");
    var txtCifrado = txtCifrado.replace(/i/igm, "imes");
    var txtCifrado = txtCifrado.replace(/a/igm, "ais");
    var txtCifrado = txtCifrado.replace(/u/igm, "ufat");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById('inputTexto').value.toLowerCase();
    //i es para afecte mayusculas como minusculas -- e else{
    //g es para toda la linea u oracion
    //m es para que afecte a multiples lineas o parrafo
    var txtCifrado = texto.replace(/enter/igm, "e");
    var txtCifrado = txtCifrado.replace(/ober/igm, "o");
    var txtCifrado = txtCifrado.replace(/imes/igm, "i");
    var txtCifrado = txtCifrado.replace(/ais/igm, "a");
    var txtCifrado = txtCifrado.replace(/ufat/igm, "u");

    document.getElementById("imgDer").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copy() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("!Se copió correctamente!");
}

function subir() {
    scrollToTopBtn.onclick = () => {
        windows.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

}

subir.onclick = document.querySelector("#scrollToTopBtn");