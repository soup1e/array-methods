// INPUT: the array of brands from data.js
// OUTPUT: an array of all the sneakers brands
// REQS: use .reduce

export const getSneaks = (brands) => brands.reduce((all, brand) => [...all, ...brand.shoes], []);

// INPUT: the array of dogs from data.js
// OUTPUT: the average age of the dogs
// REQS: use .reduce
export const getAverageAge = (dogs) => dogs.reduce((all, dog) => all + dog.age, 0) / dogs.length;
