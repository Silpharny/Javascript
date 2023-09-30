function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var birth = document.getElementById("txtano")
    var res = document.getElementById("res")
    if (birth.value.length == 0 || birth.value > ano) {
        window.alert ("[ERRO]Verifique os dados e tente novamente!")
    } else {
    var fsex = document.getElementsByName("radsex")
    var idade = ano - Number(birth.value)
    res.innerHTML = `<strong>Você tem ${idade} anos de idade</strong>`    
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id','foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 15) {
            //criança
            img.setAttribute('src','crianca_mas.png')
        } else if (idade >=15 && idade < 21) {
            //jovem
            img.setAttribute('src','jovem_mas.png')
        } else if (idade >=21 && idade < 55) {
            //adulto
            img.setAttribute('src','adulto_mas.png')
        } else {
            //idoso
            img.setAttribute('src','old_mas.png')
        }
    } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 15) {
            //criança
            img.setAttribute('src','crianca_fem.png')
        } else if (idade >=15 && idade < 21) {
            //jovem
            img.setAttribute('src','jovem_fem.png')
        } else if (idade >=21 && idade < 55) {
            //adulto
            img.setAttribute('src','adulto_fem.png')
        } else {
            //adulto
            img.setAttribute('src','old_fem.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `<strong>Detectamos ${genero} com ${idade} anos</strong>`
    res.appendChild(img)
}  
}
 