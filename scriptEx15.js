
function carregar(){
var msg = window.document.querySelector('div#msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas.` 

    if(hora >=6 && hora < 12)
    {
        img.src = 'manha.png'
        document.body.style.background = 'rgb(221, 221, 0)'
    }else{
        if(hora>= 12 && hora <= 18)
        {
            img.src = 'tarde.png'
            document.body.style.background = 'orange'
        }else if(hora > 18 && hora <= 23)
            {
                img.src = 'noite.png'
                document.body.style.background = 'rgb(1, 1, 86)'
            }else{
                img.src = 'madrugada.png'
                document.body.style.background = 'black'
            }
        }
    }
