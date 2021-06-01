let nameItem = document.getElementById('name-item');
let btnAddItem = document.getElementById('btn-add-item');
let ul = document.getElementById('list-items');
let listItemsDelete = document.getElementsByClassName('delete');

function addElement() {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');

    deleteButton.innerHTML = "X";
    deleteButton.className = "delete";
    
    li.appendChild(deleteButton);

    let descriptionItem = document.createTextNode(nameItem.value);

    li.appendChild(descriptionItem);
    ul.appendChild(li)

    nameItem.value = ''
    addFunctionDeleteButton();
}

function deleteProduto() {
    this.parentElement.remove();
}

function addFunctionDeleteButton() {
    for(let i = 0; i < listItemsDelete.length; i++) {
        listItemsDelete[i].addEventListener('click', deleteProduto)
    }
}

btnAddItem.addEventListener('click', addElement);
addFunctionDeleteButton();