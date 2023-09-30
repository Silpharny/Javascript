function tabuada() {
    var num = window.document.getElementById("num")
    var tab = window.document.getElementById("seltab")
    if (num.value.length == 0) {
        window.alert("[ERRO] Tente digitar um número maior que zero")
    } else {
        var n1 = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while(c<=10) {
            var item = document.createElement('option')
            item.text = `${n1} x ${c} = ${n1*c}`
            tab.appendChild(item)
            c++
        }
    }
}


//-------------------------------------------

/*

function tabuada() {
    var num = window.document.getElementById("num")
    var tab = window.document.getElementById("seltab")
    var n1 = Number(num.value)
    var item = document.createElement('option')
    if (n1<=0){
    window.alert("[ERRO] Tente digitar um número maior que zero")
   } else {
    tab.innerHTML = ''
    for(var c = 1; c <= 10 ;c++) {
    item.text = `${n1} x ${c} = ${n1*c}`
    tab.appendChild(item)
    }
   }
}

*/
