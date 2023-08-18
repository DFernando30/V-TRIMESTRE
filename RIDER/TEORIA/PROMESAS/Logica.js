const setText = data => {
    miDiv.textContent = data;
}

const getData = (c1) => {
    return new Promise((resuelve, rechaza) => {
        let valor = confirm("Juegas Conmigo Amigo??");
        setTimeout(() => {
            resuelve(valor)
        }, 1000)

    })
}

const showData = (c2) => {
    return new Promise((resuelve1, rechaza1) => {
        setText("Eperando Autorización");
        setTimeout(() => {
            resuelve1({ Jugador: "Diego" })
        }, 1000)
    })
}


miBoton.addEventListener('click', () => {
    getData().then(valor => {
        if (valor == true) {
            return showData()
        } else {
            alert("No cansón");
        }
    }).then(user => {
        setText(user.Jugador)
    })
})

