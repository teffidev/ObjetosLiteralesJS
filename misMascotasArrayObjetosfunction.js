//Crear un array llamado misMascotas

let misMascotas = [
    {
        nombre: "Jasper",
        raza: "Caniche",
        edad: 3,
        sonido: 'Guau',
        ladrido: function () {
            return this.sonido + " " + this.sonido 
        }
    },
    {
        nombre: "Bell",
        raza: "Bulldog",
        edad: 1,
        sonido: 'Woaf',
        ladrido: function () {
            return this.sonido + " " + this.sonido 
        } 
    }
]
for(let i = 0; i < misMascotas.length; i++){
    // console.log(misMascotas[i].ladrido())
}

let aumentarEdad=()=>{
    for(let i = 0; i < misMascotas.length; i++){
        misMascotas[i].edad = misMascotas[i].edad + 1 //misMascotas[i].edad+=1
    };
}

// console.log(misMascotas)
// aumentarEdad()
// console.log(misMascotas)

let creadorId = () => {

    for (let i = 0; i < misMascotas.length; i++) {

        misMascotas[i].id = i + 1    
        
    }
}

// console.log(misMascotas)
// creadorId()
// console.log(misMascotas)

//Eliminar la propiedad raza

console.log(misMascotas)

for(let i = 0; i < misMascotas.length; i++){

    delete misMascotas[i].raza

}

console.log(misMascotas)





