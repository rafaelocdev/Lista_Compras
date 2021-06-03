let nameItem = document.getElementById('name-item');
let btnAddItem = document.getElementById('btn-add-item');
let ul = document.getElementById('list-items');
let listItemsDelete = document.getElementsByClassName('delete');
let listButtonCheck = document.getElementsByClassName('check')

function addElement() {
    let li = document.createElement('li');
    let checkButton = document.createElement('button')
    let deleteButton = document.createElement('button');
    let descriptionItem = document.createTextNode(nameItem.value);

    descriptionItem.style = "text: upper"

    checkButton.innerHTML = "OK"
    checkButton.className = "check"

    deleteButton.innerHTML = "X";
    deleteButton.className = "delete";
    
    li.appendChild(checkButton);
    li.appendChild(deleteButton);


    li.appendChild(descriptionItem);
    ul.appendChild(li)

    nameItem.value = ''
    nameItem.focus();
    addFunctionDeleteButton();
    addFunctionCheckButton();
}

function deleteProduto() {
    this.parentElement.remove();
    nameItem.focus();
}

function checkProduto() {
    this.parentElement.style = "text-decoration: line-through;" + "color: #F0E68C;"
    nameItem.focus();
}

function addFunctionCheckButton() {
    for(let i = 0; i < listButtonCheck.length; i++ ) {
        listButtonCheck[i].addEventListener('click', checkProduto)
    }
}

function addFunctionDeleteButton() {
    for(let i = 0; i < listItemsDelete.length; i++) {
        listItemsDelete[i].addEventListener('click', deleteProduto)
    }
}

btnAddItem.addEventListener('click', addElement);
addFunctionDeleteButton();
addFunctionCheckButton();