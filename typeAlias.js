"use strict";
const user = {
    name: "45",
    age: 45,
};
// used object type in function
function login(userData) {
    return userData;
}
console.log(login({
    name: "ashik",
    age: 120,
}));
