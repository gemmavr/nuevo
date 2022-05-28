const horarioBar = document.querySelector("#horario-bar");
const categoriaBar = document.querySelector("#categoria-bar");
const phoneInputField = document.querySelector("#phone");
const inputsForm = document.querySelectorAll(".form__input-bar");


const phoneInput = window.intlTelInput(phoneInputField, {
  utilsScript:
    "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
});
// select categoria del bar

const categoriaPrecio = [
    {categoria:"categoria", value:""},
    {categoria:"€€€€ (muy caro)", value:""},
    {categoria:"€€€ (caro)", value:""},
    {categoria:"€€ (medio)", value:""},
    {categoria:"€ (bajo) ", value:""},
]

categoriaPrecio.map(({categoria, value})=>{
    const opcion = document.createElement("option");
    opcion.innerHTML=categoria;
    categoriaBar.appendChild(opcion);
})

// select horario del bar
const horarios = [
    {horario:"horario", value:""},
    {horario:"mañana", value:""},
    {horario:"mañana/tarde", value:""},
    {horario:"mañana/tarde/noche", value:""},
    {horario:"mañana/tarde/noche/madrugada", value:""},
    {horario:"tarde", value:""},
    {horario:"tarde/noche", value:""},
    {horario:"tarde/noche/madrugada", value:""},
    {horario:"noche", value:""},
    {horario:"noche/madrugada", value:""},
    {horario:"madrugada", value:""}
];

horarios.map(({horario,value})=>{
    const opcion = document.createElement("option");
    opcion.innerHTML=horario;
    horarioBar.appendChild(opcion);
})


const obtenerInput = (e)=>{
    console.log("Hey");
}

let valorInput;
// inputs form bar
for (let i = 0; i < inputsForm.length; i++) {
    inputsForm[i].addEventListener("keyup",(e)=>{
        valorInput = e.target.value;
        console.log(valorInput);
    })
}

// Obtener datos del select
const obtenerValor = (e)=> {
    console.log(e.target.value);
}

horarioBar.addEventListener("click",e =>obtenerValor(e))
categoriaBar.addEventListener("click",e => obtenerValor(e))
