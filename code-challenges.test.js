// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


//TODO --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

//TODO a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

describe("drawShuffle", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content", () => {
        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
        // Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
        // Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        expect(drawShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(drawShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))
    })
})

//* good fail
//* FAIL  ./code-challenges.test.js
//* drawShuffle
//*   ✕ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)

//* ● drawShuffle › takes in an array, removes the first item from the array and shuffles the remaining content

//*   ReferenceError: drawShuffle is not defined


//TODO b) Create the function that makes the test pass.
// First we declare our function, drawShuffle, that takes in array as its parameter
// const drawShuffle = (array) => {
//     //Remove the first element
//     array.shift()
//     // I searched the Fisher-Yates algorithm for an unbiased shuffle
//     // Use the length of the mutated array to determine the length of the for loop
//     for (let i = 0; i < array.length; i++) {
//         // I iterate through the array and swap the elements around using a random number generator.
//         // I NEEDED this ; to ensure that the randInd was initialized before the array destructuring
//         let randInd = Math.floor(Math.random() * array.length);
//         // Since I am swapping elements using array destructuring, I don't have to worry about having duplicates in the shuffled array
//         [array[i], array[randInd]] = [array[randInd], array[i]]
//     }
//     return array
//   }

    //* PASS  ./code-challenges.test.js
    //* drawShuffle
    //*   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)

//TODO Refactor
//? I did some research here and found another way to use the .sort() method. The callback function we define in the sort method can be a-b just shows how we sort a, b. If a - b returns a negative number, a is smaller than b so a will be sorted left, a positive number will mean b is smaller so b will be sorted left, and zero means they are the same and it doesn't matter. This will allows us to sort in ascending order. However if we changed our call back function to give us a random order to sort using Math.random(), we could achieve something similar with less typing.

//? We know that Math.random generates a random number between 0 and 1, by subtracting 0.5 from it, we can also get random negative and positive numbers which will change the way the numbers are sorted. I also changed to splice(1) because shift will return only the first element and not the array and I was unable to use it inline with the .sort() method.
    const drawShuffle = array => array.splice(1).sort((a,b) => Math.random() - 0.5)

    //* PASS  ./code-challenges.test.js
    //* drawShuffle
    //*   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)

//TODO --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

//TODO a) Create a test with expect statements for each of the variables provided.

describe("arrayMinMax", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        // Expected output: [-8, 90]
        const nums2 = [109, 5, 9, 67, 8, 24]
        // Expected output: [5, 109]
        expect(arrayMinMax(nums1)).toEqual([-8, 90])
        expect(arrayMinMax(nums2)).toEqual([5, 109])
    })
})

//*  ReferenceError: arrayMinMax is not defined


//TODO b) Create the function that makes the test pass.

// const arrayMinMax = (array) => {
//     //declare a variable and initialize with an empty array to hold min and max
//     let minMax = []
//     //I sorted the array from least to greatest then push the shift output which is the smallest in the array
//     minMax.push(array.sort((a,b) => a-b).shift())
//     //I reverse the sorted array which places the greatest number at index 0 and push the shift output
//     minMax.push(array.reverse().shift())
//     return minMax
// }

    //* PASS  ./code-challenges.test.js
    //* drawShuffle
    //*   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)
    //* arrayMinMax
    //*   ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order

//TODO Refactor
//? I'm not sure if this is a better way to do it necessarily, but i could do it a single line so...
    const arrayMinMax = arr => [arr.sort((a,b) => a-b)[0], arr.sort((a,b) => a-b)[arr.length -1]]

    //* PASS  ./code-challenges.test.js
    //* drawShuffle
    //*   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)
    //* arrayMinMax
    //*   ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order (1 ms)

//TODO --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

//TODO a) Create a test with an expect statement using the variables provided.

describe("noDupes", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments", () => {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
        // Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
        expect(noDupes(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

//* ReferenceError: noDupes is not defined

//TODO b) Create the function that makes the test pass.

// // First declare our function noDupes and using the spread operator, we can use as many arrays as we need.
// const noDupes = (...arrays) => {
// // I want to concat the arrays. I use an empty array to concat all the arrays and store it in variable concatArr
//     let concatArr = [].concat(...arrays)
// // I also created an empty array to push all the non dupe elements
//     let noDupeArr = []
//     // I loop through the length of the concatenated array
//     for (i = 0; i < concatArr.length; i++){
//         // This part checks to make sure that the value of the concatArr at the current index does not exist in the noDupeArr. It will push the value at the current index if there is no duplicate and do nothing if there is a duplicate
//         if(noDupeArr.indexOf(concatArr[i]) === -1){
//             noDupeArr.push(concatArr[i])
//         } 
//     }
//     return noDupeArr
// }
    //* PASS  ./code-challenges.test.js
    //* drawShuffle
    //*   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (1 ms)
    //* arrayMinMax
    //*   ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order
    //* noDupes
    //*   ✓ takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments

//TODO Refactor
//? Instead of using a for loop, we can use forEach and check each value using the same if statement and checking against the noDupe array that we have declared within the function. We can remove a variable declaration and perform the forEach method directly on the concatenated array. I used the semicolon after declaring and initializing noDupe to prevent it from leaking into the next line of the function.

const noDupes = (...arrays) => {
    let noDupe = [];
    ([].concat(...arrays)).forEach((value) => {
        if(noDupe.indexOf(value) === -1) noDupe.push(value)
    })   
    return noDupe
}

//* PASS  ./code-challenges.test.js
//* drawShuffle
//*   ✓ takes in an array, removes the first item from the array and shuffles the remaining content (2 ms)
//* arrayMinMax
//*   ✓ takes an array of numbers and returns an array of the minimum and maximum numbers in that order (1 ms)
//* noDupes
//*   ✓ takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments