/*
  JS Code Kata - Functions - Exercise 02
  Goal 1: populate the showRelation function to log out a relation between two people
  Goal 2: call the showRelation function three times, with parameters for each of the three cases
  Goal 3: commit the change and push the result back to your github fork
  Next: Start Exercise 03
*/

let anna = { name: 'Anna', age: 36 }
let beata = { name: 'Beata', age: 28 }
let carrie = { name: 'Carrie', age: 31 }

let people = [anna, beata, carrie]
let names = people.map(person => person.name)


function run() {
  // replace these with calls to showRelation
  console.log('>', anna.name, 'is', relation, 'with', carrie.name)
  console.log('>', beata.name, 'is', relation, 'with', carrie.name)
  console.log('>', carrie.name, 'is', relation, 'with', beata.name)

  console.log('I know the names of', names)
}

function showRelation(n1, n2, relation) {
  // implement this bit
}

run()

console.log('Edit this file to implement showRelation, and call the function three times') // and remove this line
