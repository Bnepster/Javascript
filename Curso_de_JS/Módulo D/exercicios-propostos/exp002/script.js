function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagens')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        //Bom dia
        img.src = 'imagens/manha.png'
        document.body.style.background = '#dac099'
    }
    else if(hora >= 12 && hora < 18){
        //Boa tarde
        img.src = 'imagens/tarde.png'
        document.body.style.background = '#b17167'
    }
    else{
        //Boa noite
        img.src = 'imagens/noite.png'
        document.body.style.background = '#091b1d'
    }
}
