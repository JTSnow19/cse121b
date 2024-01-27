const baseArray = ['one', 'two', 'three'];
const secondArray = baseArray.map(function(step) {
    return `<li>${step}</li>`;
});
document.getElementById("myList").innerHTML = secondArray.join();

const alphabetAs = ['A', 'B', 'A'];

function gPA(alphabetA){
    if (alphabetA == 'A'){
        return 4
    } else {
        return 3
    }
}

const alphaStep = alphabetAs.map(gPA);
const gradeTotal = alphaStep.reduce(function (total, item) {
    return total + item;
  });
  const gpa = pointsTotal / alphaStep.length;
  
const fruitArrays = ['watermelon', 'peach', 'apple', 'tomato','grape'];
const faShort = fruitArrays.filter(fruitArray => fruitArray.length > 6);

const myArray = [12, 34, 21, 54];
const luckyN = 21;
let luckyIndex = myArray.indexOf(luckyN);