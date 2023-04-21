const zoo = new Set(["panda", "tiger", "cat"]);

function addAnimal(animalName) {
  zoo.add(animalName);
}
function checkAnimal(animalName) {
  let result = zoo.has(animalName);
  if (result == true) {
    console.log("founded");
  } else {
    console.log("not founded");
  }
}
function deleteAnimal(animalName) {
  zoo.delete(animalName);
}

function animalList() {
  for (const animal of zoo) {
    console.log(animal);
  }
}
animalList();
console.log(animalList);
addAnimal("mouse");
checkAnimal("cat");

console.log(zoo);
