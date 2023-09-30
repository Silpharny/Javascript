function contar() {
    var inicio = window.document.getElementById("inicio")
    var fim = window.document.getElementById("fim")
    var passo = window.document.getElementById("passo")
    var n1 = Number(inicio.value)
    var n2 = Number(fim.value)
    var n3 = Number(passo.value)
    var res = window.document.getElementById("res")
    
    if (n1==0 || n2 ==0 || n3==0){
        window.alert("[ERRO] Escolha um número maior que ZERO")
        res.innerHTML = "Impossível Contar!"
    } else { 
        res.innerHTML = "Contando: "
       
        if (n1<n2) {
            //Contagem Crescente
            for(var c = n1; c<=n2; c+=n3) {
                res.innerHTML += `\u{1F449} ${c} `            
            }
            res.innerHTML += `\u{1F3C1}`
        } else {
            //Contagem Regressiva
            for(var c = n1; c>=n2; c-=n3) {
                res.innerHTML += `\u{1F449} ${c} `            
            }
            res.innerHTML += `\u{1F3C1}`
        }
        }
    
        
} 
 