//Union - Объединение

/*
const a = new Set([1, 2, 3]);
const b = new Set([4, 3, 2]);

const union = new Set([...a, ...b]);
console.log(union);
*/

//-------------------------------------

//Intersection - Пересечение

/*
const a = new Set([1, 2, 3]);
const b = new Set([4, 3, 2]);

const intrsection = new Set([...a].filter((x) => b.has(x)));
console.log(intrsection);
*/

//--------------------------------------

//Difference - Разница


const a = new Set([1, 2, 3]);
const b = new Set([4, 3, 2]);

const different = new Set([...a].filter((x) => !b.has(x)));
const different1 = new Set([...b].filter((x) => !a.has(x)));
const union = [...new Set([...different, ...different1])];
console.log(union);



