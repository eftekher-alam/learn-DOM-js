/* -----------[ getElementById() ]-----------
    * select by getElementById
    * To select an element need to put id of the element.
    * It returns a single html element as object
*/

// let header = document.getElementById("header1");
// header.style.textTransform = "uppercase";

/* -----------[ getElementByTagName() ]----------
    * It select elements by the tag name e.g. h1, ul, div etc.
    * It will return a HTMLCollection(it is like array but not array) of elements.
    * Hence a document can have multiple same html element so that it will return all the elements.
    * It returns multiple objects so the name is plural (Elements).
    *  we also can iterate through the HTMLCollection to access a single element.
*/

// let headers = document.getElementsByTagName("h1");
// for (let item of headers) {
//     console.log(item);
// }

/* -----------[ getElementByClassName() ]----------
    * It select elements by the class name of the elements.
    * It will return a HTMLCollection(it is like array but not array) of elements.
    * Hence a class can use multiple html element so that it will return all the elements.
    * It returns multiple objects so the name is plural (Elements).
*/

// let items = document.getElementsByClassName("item");
// for (let item of items) {
//     item.style.color = "red";
// }



/* -----------[ querySelector() ]----------
    * It will select the first element of the given parameter.
    * As parameter need to use # for id and dot(.) for class selector just like CSS selector.
    * You can say, it is alternative of JQuery.
*/

// //it will just return the first header
// let header = document.querySelector(".header");
// console.log(header.innerText);
// // output: Lorem ipsum dolor sit amet.

/* -----------[ querySelectorAll() ]----------
    * It will select all the elements [HTMLCollection(it is like array but not array)].
    * As parameter need to use # for id and dot(.) for class selector.
*/

// let headers = document.querySelectorAll(".header");
// for (let header of headers) {
//     header.style.color = "green";
// }


/* -----------[ use these selector on other obj ]---------- 
    * It will select only those li items which are inside the first-ul element. 
*/
// let ul = document.querySelector(".first-ul");
// let items = ul.getElementsByClassName("item");
// for (const iterator of items) {
//     iterator.style.color = "blue";
// }


// :first-child
// :last-child
// :nth-child(2)
let ul = document.querySelector(".first-ul");
let item = ul.querySelector(".item:nth-child(2)");
item.style.color = "blue";
