// Armar un objeto literal llamado "program" que contenga como propiedades: 
// - "users" que es un array de objetos "user"
// - cada "user" del array contiene las propiedades:
//   { email, password, name, lastname, posts (un array de "posts") }
// - cada "post" del aray es un objeto con las propiedades:
//   { title, content }
// - "logedUser" que tiene por defector el valor "null"
// - "login()" es un metodo que recibe un "email" y un "password". 
//   Si encuentra concidencia con alguno de los usuarios sobre escribe 
//   el valor de "logedUser" con ese usuario y
//   y por ultimo imprime por consola el logedUser 
// -"addPost()" es un metodo que recibe un "title" y un "content" y con esa
//   información agrega un post dentro del objeto loggedUser y 
//   por ultimo imprime por consola el logedUser

let program = function(email, password){
        for (let i = 0; i < this.users.length; i++){
            if(email === this.users[i].email && password === this.users[i].password){
                this.logedUser = this.users[i]
                console.log(this.logedUser)
            }
        }
}

let programUser = [
    {
        email: 'tefyberal09@gmail.com',
        password: 123654,
        name: 'Estefania',
        lastname: 'Bermudez',
        posts: [
            {
                title: 'La vida bella',
                content: 'Debemos disfrutar la vida y saberla vivir'
            }
        ],
        logedUser: null,
        login: function (email, pasword) {
            for (let i = 0; i < this.users.length; i++){
                if(email === this.users[i].email && password === this.users[i].password){
                    this.logedUser = this.users[i]
                    console.log(this.logedUser)
                }
            }
        },
        
    },
    {
        email: 'tefyberal@hotmail.com',
        password: 123655,
        name: 'Estefi',
        lastname: 'Alvarez',
        posts: [
            {
                title: 'Programación',
                content: 'Aprender a programar es muy fácil'
            }
        ],
        logedUser: null,
        login: program
    }
];