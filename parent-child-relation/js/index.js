
//----------[ Get children of a parent ]---------

// const parent = document.querySelector(".todo-list");
// const allChild = parent.childNodes;
// for (const iterator of allChild) {
//     iterator.style.color = "red";
// }



// ----------[ Grandparent to parent to children ]---------
//It returns a single element
// const grandparent = document.querySelector(".todo-list-container");

// //It returns a HTMLCollection
// const parent = grandparent.childNodes;
// console.log(parent);

// //Hence, parent is a collection need to access by index.
// const allChild = parent[1].children;
// for (const iterator of allChild) {
//     console.log(iterator.innerText);
// }


// ----------[ Grandparent to children (skip parent) ]---------
// const grandparent = document.querySelector(".todo-list-container");
// const allChild = grandparent.querySelectorAll(".item");
// for (const child of allChild) {
//     child.innerText = "Data has been changed."
// }



// ----------[ children to parent ]---------

// const allChild = document.querySelector(".item");
// const parent = allChild.parentElement;


// -----[ children to closest ancestor (down to up) ]---------

// const child = document.querySelector(".item");
// const grandparent = child.closest(".todo-list-container");
// console.log(grandparent);

// ----------[ access sibling ]---------

//Next sibling
let childOne = document.querySelector(".item");
const childTwo = childOne.nextElementSibling;
childTwo.style.color = "red";

//Previous sibling
const previousChild = childTwo.previousElementSibling;
previousChild.style.color = "green";