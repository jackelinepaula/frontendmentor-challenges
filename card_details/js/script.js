function getText() {
    var name = document.getElementById('cardholdername')
    document.querySelector('#name').innerHTML = name.value
}

function getCardNumber() {
    var nbr = document.getElementById('cardnumber')

    var newnbr = nbr.value
    newnbr = newnbr.replace(/\D/g, "").replace(/\s/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);

    nbr.value = newnbr
    document.getElementById('number-p').innerHTML = newnbr
}

function getCVC() {
    var cvc = document.getElementById('cvc-in')
    document.querySelector('#card-cvc').innerHTML = cvc.value
}

function getMonth() {
    var mm = document.getElementById('mm')
    if (parseInt(mm.value) > 12) {
        document.querySelector('#mm-card').innerHTML = '12'
        mm.value = '12'
    } else {
        document.querySelector('#mm-card').innerHTML = mm.value
    }
}

function getYear() {
    var yy = document.getElementById('yy')
    if (parseInt(yy.value) < 23) {
        document.querySelector('#yy-card').innerHTML = '23'
    } else {
        document.querySelector('#yy-card').innerHTML = yy.value
    }
}

// Animações JS-CSS

const button = document.getElementById('confirm')

button.addEventListener('click', (e) => {

    //Variaveis 
    const form = document.querySelector('.form')
    const message = document.querySelector('.message-container')
    const after = document.querySelector('.after')

    //Manipulando array
    let elements = validarCampos()
    //Filtrando a redundância
    const values = elements.filter(value => Boolean(value))

    //Tomadas de decisão
    if (values.length == 0) {

        button.classList.add('active')
        after.style.display = 'block'

        setTimeout(() => {
            button.classList.remove('active')
            after.style.display = 'none'
            form.style.display = 'none'
            message.style.display = 'flex'
        }, 2000);

    } else {

        values.map((element) => {

            if (element.length != 0) {

                let input = document.getElementById(`${element}`)
                let text = document.querySelector(`.${element}`)

                input.style.border = '1px solid #eb1010'
                text.style.display = 'block'
            }

        })

    }

})

function validarCampos() {
    //Pegando todos os inputs
    const inputs = document.querySelectorAll('form input')
    //Convertendo nodelist em array
    let array = Array.from(inputs)

    //Mapeando com função de callback
    let elements = array.map((element) => {
        if (element.value == '')
            return element.id
        else return false
    })

    //Retornando o array
    return elements
}

function reload() {
    // const form = document.querySelector('.form')
    // const message = document.querySelector('.message-container')

    // form.style.display = 'flex'
    // message.style.display = 'none'

    location.reload()
}
