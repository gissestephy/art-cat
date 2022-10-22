/* Se declara una clase */

class Animales {
    constructor(dueña, nombre, raza, edad, actividades, comidas, visitaAlVeterinario, vacunas) {
        this.nombre = nombre;
        this.dueña = dueña;
        this.raza = raza;
        this.edad = edad;
        this.comidas = comidas;
        this.actividades = actividades;
        this.vacunas = vacunas;
        this.visitaAlVeterinario = visitaAlVeterinario
    };

    /* Metodos geter and setters */

    get verInfoAnimal() {
        return `El animal es de raza ${this.raza}, su nombre es ${this.nombre}, tiene ${this.edad} años, su alimentación es ${this.comidas}, visita al veterinario ${this.visitaAlVeterinario}, tiene ${vacunas} las vacunas`;
    }

    set kaput(edadCumplida) {
        this.vivo = edadCumplida;
    }
}

/*Muestro la info por consola*/
let gato = new Animales ("Gisela Flores", "China", "Pixie Bob", 4, "hacer travesuras", "atún, pescado, catchow", "un sábado por medio", "todas")
console.log(gato);

/*Utilizo el nombre fuera de la lista*/
const nombre = document.querySelector('#name');
nombre.textContent = gato.nombre;


/*Muestro la lista*/
const objetoChina = [
    {Info: "Dueña: ", valor: gato['dueña']},
    {Info: "Raza: ", valor: gato['raza']},
    {Info: "Edad: ", valor: gato['edad'] + ' años'},
    {Info: "Comidas: ", valor: gato['comidas']},
    {Info: "Actividades: ", valor: gato['actividades']},
    {Info: "Vacunas: ", valor: gato['vacunas']},
    {Info: "Visitas al Veterinario: ", valor: gato['visitaAlVeterinario']}
];

let info = objetoChina.map((gato) => {
    return gato.valor;
}); 

// console.log(info);

for (let i = 0; i < 7; i++) {
    let item = document.createElement('li');
    item.innerHTML = objetoChina[i].Info + objetoChina[i].valor;
    document.querySelector('.detalles').appendChild(item);
};