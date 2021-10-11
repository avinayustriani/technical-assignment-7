// soal 1
// const person = {
//   name: "person A",
//   age: 100,
//   favDrinks: [
//     "coffee",
//     "jamu temulawak",
//     "tea"
//   ],
//   greeting: function() {
//     console.log("hello world")
//   }
// }

// /// EDIT HERE
// function

// /// STOP

// console.log(person.name);
// console.log(person.age);
// console.log(person.favDrinks);
// console.log(person.greeting("John Watson"));

// soal 2
function getObjectValue(obj, path) {
    let source = path.split ('.')
    cosole.log(source , '----- source split');
    let result = obj
    console.log(result , '-----result dari obj');
    for (let a = 0; a < source.lenght; a++){
      if result === null){
        break
      }
      let value = source[a]
      console.log(value, '======= value source[a]');
      let object = result [value]
      consle.log(object, '<<, object result[value]');
      if (object !== undefined) {
        result = object
      } else {
        return null
      }
    }
    return null
  }
  
  const milkBasedCoffee = {
    name: "latte",
    ingredients: {
      espresso: {
        origin: "lampung",
        roastProfile: "medium to dark"
        ratio: 1
      },
      milk: {
        brand: "susu murni",
        isVegan: false,
        ratio: 5
      }
    },
  }
  
  const espresso = getObjectValue(milkBasedCoffee, "ingredients.espresso.origin");
  const coffeeBrand = getObjectValue(milkBasedCoffee, "ingredients.espresso.brand");
  const isMilkVegan = getObjectValue(milkBasedCoffee, "ingredients.milk.isVegan");
  
  console.log(espresso);
  console.log(coffeeBrand);
  console.log(isMilkVegan)
  
  
// soal 3