// console.dir(document) //
// Show all the diffrent properties and methods the document
// object has



// GETELEMENTBYID //
// variables

let headerTitle = document.getElementById('header-title');
let header = document.getElementById('main-header');

// Changing text content of an HTML tag
// headerTitle.textContent = 'CSS';

// innerText pays attention to style
// headerTitle.innerText = 'Prettier';


// innerHTML recieves a new html tag to pass in wherever we are pointing to
// in this case we are inserting an h3 inside an h2
// headerTitle.innerHTML = '<h3>Mira dimelooo</h3>'

// Changing styles

//headerTitle.style.borderBottom = 'solid 3px red'

header.style.borderBottom = 'solid 3px red'


// GETELEMENTSBYCLASSNAME //
// variables

// let items = document.getElementsByClassName('list-group-item');
// console.log(items);

// items[1].textContent = 'Perro'
// items[2].style.background = 'gray'

// you cannot style all items doing this 👇
// items.style.background = 'gray'
// you'll get an error Uncaught TypeError: items.style is undefined

// instead do this 👇
//for(let i = 0; i < items.length; i++){
//    items[i].style.background = 'gray'
//}


// GETELEMENTSBYTAGNAME //
// same like className but with the tag

// QUERYSELECTOR //
// you can select any item, just one at a time
// grabs the first one in the browser, if we were to select an item with class="tittle"
// it will only grab the first item with that class

// let form = document.querySelector('.form1');

// form.style.border = '1px solid black';

// let input = document.querySelector('input');
// input.value = 'Hello there'

// let submit = document.querySelector('input[type = "submit"] ');
// submit.value = 'Send';

// let item = document.querySelector('.list-group-item');
// item.style.color = 'violet'

// let lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue'

// let secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'green'


// QUERYSELECTORALL //

let titles = document.querySelectorAll('.title');

// console.log(titles);


// TRAVERSING THE DOM

var itemList = document.querySelector('#items');

// the tag that wraps all the siblings
// elements on the same level are siblings
// parentNode property

// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = '#f4f4f4'

// use parentNode to grab the parent element 
// console.log(itemList.parentNode.parentNode);

// parentElement
// basically the same thing as parentNode


// childNodes

// console.log(itemList.childNodes);
// you get a nodeList, an array to manipulate
// with this property you get a node call text, which is the line breaks between each html tag
// having that text node could be confusing becouse is index 0


// children

// console.log(itemList.children)
// you get an HTMLCollection
// children gives us just the elements, no text node


// FirstChild
// console.log(itemList.firstChild);
// you get the text node, so this property is kind of useless


// // firstElementChild
// console.log(itemList.firstElementChild);
// // with this one you get the very first element 

// // same thing with lastChild
// console.log(itemList.lastChild);

// // lastElementChild
// console.log(itemList.lastElementChild);



// SIBLINGS

// nextSibling

// console.log(itemList.nextSibling);
// // you get the text node again, bad

// // nextElementSibling solves the problem giving the actual element sibling
// console.log(itemList.nextElementSibling);


// // previousSibling
// // you guest it, text node
// console.log(itemList.previousSibling);

// // previousElementSibling
// console.log(itemList.previousElementSibling);

// itemList.previousElementSibling.style.color = 'red'

