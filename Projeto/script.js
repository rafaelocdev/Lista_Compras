let nameItem = document.getElementById('input-name-item');
let btnAddItem = document.getElementById('btn-add-item');
let ul = document.getElementById('list-items');
let listItemsDelete = document.getElementsByClassName('delete');
let listButtonCheck = document.getElementsByClassName('check')

function addElement() {
    let li = document.createElement('li');
    let checkButton = document.createElement('img')
    let deleteButton = document.createElement('button');
    let p = document.createElement('p');
    let descriptionItem = document.createTextNode(nameItem.value);

    descriptionItem.style = "text: upper";

    checkButton.src = "/img/no_ticado.png";
    checkButton.alt = "não-ticado";
    checkButton.className = "check";

    deleteButton.innerHTML = "X";
    deleteButton.className = "delete";

    p.className = "name-item"
    
    p.append(descriptionItem);
    li.appendChild(checkButton);
    li.appendChild(deleteButton);
    li.appendChild(p);

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
    this.parentElement.children[2].style = "text-decoration: line-through;" + "color: #F0E68C;"
    this.checkButton.src = "/img/ticado.png"
    this.checkButton.alt = "ticado"
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