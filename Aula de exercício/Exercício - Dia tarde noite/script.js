function carregar() {
var msg = window.document.getElementById("msg")
var img = window.document.getElementById("imagem")
var data = new Date()
var hora = data.getHours() + ":" + data.getMinutes()

msg.innerHTML = `Agora são ${hora} horas`
if (hora >= 0 && hora <= 5) {
    //Boa Madrugada!
    img.src = "fotomadrugada.jpg"
    document.body.style.background = "#02121f"
} else if (hora >= 6 && hora <=11) {
    //Bom Dia!
    img.src = "fotomanha.jpg"
    document.body.style.background = "#2d87cc"
} else if (hora >= 12 && hora <= 17) {
    //Boa Tarde!
    img.src = "fototarde.jpg"
    document.body.style.background = "#cc842d"
} else{
    //Boa Noite!
    img.src = "fotonoite.jpg"
    document.body.style.background = "#0f0b05"
}
}
