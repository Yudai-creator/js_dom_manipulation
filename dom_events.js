// // this is the way of doing events, using addEventListener
// // to maintain the html markup clean
// let btn = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(){
//     document.getElementById('header-title').textContent = 'UWU';
//     document.querySelector('#main').style.backgroundColor = '#f4f4f4'
// }


// The 'e', event parameter

// let btn = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(e){
    //console.log(e)
    // you get a ton of properties, useful to other stuff like animations(clientX and clientY, positon of the mouse)
    
    // // for example
    // console.log(e.target)
    // // you get the actual element, in this case the button producer of the event

    // console.log(e.target.id)
    // console.log(e.target.className)
    // console.log(e.target.classList)

    // console.log(e.type);
    // // type of event

    // console.log(e.clientX)
    // // position of the mouse in the X axis
    
    // console.log(e.offsetX)

    // // client is the position from the browser windown, and offset is from the the element



//}


let btn = document.getElementById('button');
let box = document.getElementById('box')

// btn.addEventListener('click', runEvent);
// btn.addEventListener('dblclick', runEvent);
// btn.addEventListener('mousedown', runEvent);
// btn.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseleave', runEvent);

// box.addEventListener('mouseover', runEvent);
// box.addEventListener('mouseout', runEvent);

// mouseenter will fire off just with the parent element, mouseover will fire off with any
// child elements that parent element has
// same with mouseleave and mouseout

// Important
// box.addEventListener('mousemove', runEvent);
// useful to track the mouse position

let output = document.getElementById('output');

let itemInput = document.querySelector('input[type="text"]');
let form = document.querySelector('form');


// keydown fires off you write keys into the input
// itemInput.addEventListener('keydown', runEvent);

// keyup fires off when you release the key
// itemInput.addEventListener('keyup', runEvent);

// itemInput.addEventListener('keypress', runEvent);

// when the input is focus, is when you are using it
// itemInput.addEventListener('focus', runEvent);

// the contrary of focus
// itemInput.addEventListener('blur', runEvent);


// Event to catch up items in a select
// let select = document.querySelector('select').addEventListener('change', runEvent)

// form.addEventListener('submit', runEvent)

// function runEvent(e){
//     e.preventDefault();
//     console.log('Event type:' + e.type)

    // Printing the input text in html page
    // console.log(e.target.value);
    // output.innerHTML = '<h3>'+e.target.value+'</h3>'

    // Tracking mouse position inside box div
    // output.innerHTML = '<h3>MouseX:' + e.offsetX + '</h3><h3>MouseY:' + e.offsetY + '</h3>'

    // changing colors with mouse position
    // box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)"
//}