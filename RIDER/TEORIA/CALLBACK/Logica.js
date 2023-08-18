// const setText = data =>{
//     miDiv.textContent = data;
// }

// const getData = (c1) =>{
//     let valor = prompt("¿Quieres Jugar Conmigo?");
//     setTimeout(() =>{
//         c1(valor)
//     }, 2000)
// }

// const showData = (c2) => {
//     setText("Eperando Autorización");
//     setTimeout(() =>{
//         c2({ Jugador: "Diego" })
//     }, 2000)
// }

// miBoton.addEventListener('click', ()=>{
//     getData(valor =>{
//         if (valor == "Si") {
//             showData(user => {
//                 setText(user.Jugador)


//             })
//         }  else {
//             alert("No quiero jugar contigo");
//         }

//     })
// });

const miDiv = document.getElementById('miDiv');
const miBoton = document.getElementById('miBoton');

const setText = data => {
    miDiv.textContent = data;
};

const getData = c1 => {
    setText("¿Quieres Jugar Conmigo?");
    setTimeout(() => {
        const respuesta = confirm("¿Quieres Jugar Conmigo?");
        c1(respuesta);
    }, 1000);
};

miBoton.addEventListener('click', () => {
    getData(respuesta => {
        if (respuesta === true) {
            setText("Esperando Autorización...");
            setTimeout(() => {
                setText("¡Comencemos a jugar!");
                const movingElement = document.createElement('div');
                movingElement.textContent = '🐍';
                movingElement.classList.add('moving-element');
                miDiv.appendChild(movingElement);

                const obstacle1 = document.createElement('div');
                obstacle1.classList.add('obstacle');
                obstacle1.style.left = '50px';
                miDiv.appendChild(obstacle1);

                const obstacle2 = document.createElement('div');
                obstacle2.classList.add('obstacle');
                obstacle2.style.left = '250px';
                miDiv.appendChild(obstacle2);
            }, 1000);
        } else {
            alert("No quiero jugar contigo");
        }
    });
});
