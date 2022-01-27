let addForm = document.getElementById('add-form');

let items = document.getElementById('items');

let filter = document.getElementById('filter');


// Form submit event
addForm.addEventListener('submit', addItem);

// Delete event
items.addEventListener('click', removeItem);

// Filter event
filter.addEventListener('keyup', filterItems);

// Function to add items
function addItem(e){
    e.preventDefault();
    
    // Get input value
    let newItem = document.getElementById('item').value;

    // Create new li element
    let li = document.createElement('li');

    // Add class
    li.className = 'list-group-item';

    // Add text node with input value
    li.appendChild(document.createTextNode(newItem));

    // Create delete button element

    let deleteBtn = document.createElement('button');

    // Add classes to delete button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'

    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    items.appendChild(li)

}

// Remove item
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            let li = e.target.parentElement;
            items.removeChild(li);
        }
    }
}

// Filter items
function filterItems(e){
    // convert text to lowercase
    let text = e.target.value.toLowerCase();

    let ul = items.getElementsByTagName('li');
    // Convert html collection to array
    Array.from(ul).forEach(function(item){
        let itemName = item.firstChild.textContent;

        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else{
            item.style.display = 'none'
        }
    })
}