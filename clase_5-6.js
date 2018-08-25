// var cars = [
//     {
//       model:'Suran',
//       brand: 'volkswagen',
//       year: 2015
//     },
//     {
//       model:`Audi TT`,
//       brand:'Audi',
//       year: 2017
//     },
//     {
//       model:`Gran turismo`,
//       brand:'Maserati',
//       year: 2018
//     }
//   ]
// var list = [];
// function Car(model, brand, year)
// {
//     var id = Math.random();
//     this.model = model;
//     this.brand = brand;
//     this.year = year;
//     this.getCarName = function()
//     {
//         return this.model + ' - ' + this.brand + ' - ' + this.year;
//     }
// }
// for(a = 0; a < cars.length; a++)
// {
//     model = cars[a].model;
//     brand = cars[a].brand;
//     year = cars[a].year;
//     list.push(new Car(model, brand, year));
// }


// var students = [
//     {
//       firstName: 'Juan',
//       lastName: 'Pérez',
//       dni: 45678987,
//       email: 'juan@gmail.com'
//     },
//     {
//       firstName: 'Ana',
//       lastName: 'Fernandez',
//       dni: 45678989,
//       email: 'ana@gmail.com'
//     },
//     {
//       firstName: 'Pedro',
//       lastName: 'Mármol',
//       dni: 45678956,
//       email: 'pedro@gmail.com'
//     }
//   ]

// function Student(firstName, lastName, dni, email)
// {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.dni = dni;
//     this.email = email;
//     var id = Math.random();
//     this.getId = function() {
//       return id;
//     }
// }

// for(a = 0; a < students.length; a++)
// {
//   var person = new Student(students[a].firstName, students[a].lastName, students[a].dni, students[a].email);
//   console.log(person);
// }

var numbers = [0,1,2,3,4,5];
console.log(numbers);
var nu = parseInt(prompt('ingrese un numero'));

function deleteElement(index, list){
  if(Array.isArray(list)) {
    list.splice(index, 1);
    return list;
    
  }
}
var lista = deleteElement(nu, numbers);
console.log(lista);
