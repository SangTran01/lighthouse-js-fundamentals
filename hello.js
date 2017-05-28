var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "choco$

// Write a while loop that prints out the contents of ingredients:
var index = 0;
while (index != ingredients.length) {
        console.log(ingredients[index]);
        index++;
}

// Write a for loop that prints out the contents of ingredients:

for (var i = 0; i < ingredients.length; i++){
        console.log(ingredients[i]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = ingredients.length; i >= 0; i--) {
        console.log(ingredients[i]);
}
