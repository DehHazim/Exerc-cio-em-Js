function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var hora = 22
    msg.innerHTML = "Agora são ${hora} horas."
    if (hora <= 0 && < 12){
      // Bom dia
      img.src = "manha.png"       
      document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
      // Boa tarde
      img.src = "tarde1.png"
        document.body.style.backgroung = '#b9846f'
    } else {
      img.src = "noite1.png"
        document.body.style.background = #515154
    }
    
  }