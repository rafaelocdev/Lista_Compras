let nameItem = document.getElementById('input-name-item');
let btnAddItem = document.getElementById('btn-add-item');
let ul = document.getElementById('list-items');
let listItemsDelete = document.getElementsByClassName('btn-delete');
let listButtonCheck = document.getElementsByClassName('btn-check');
let listNameCheck = document.getElementsByClassName('name-item');

function addElement() {
    let li = document.createElement('li');
    let checkButton = document.createElement('img')
    let deleteButton = document.createElement('img');
    let p = document.createElement('p');
    let descriptionItem = document.createTextNode(nameItem.value);
    let divCheckName = document.createElement('div');

    descriptionItem.style = "text: upper";

    checkButton.src = "/img/no_ticado.png";
    checkButton.alt = "não-ticado";
    checkButton.className = "btn-check";

    deleteButton.src = "/img/trash.png";
    deleteButton.alt = "Deletar";
    deleteButton.className = "btn-delete";

    divCheckName.style.display = "flex";
    divCheckName.id = "unchecked";

    p.className = "name-item";
    
    p.append(descriptionItem);
    divCheckName.appendChild(checkButton);
    divCheckName.appendChild(p);
    li.appendChild(divCheckName);
    li.appendChild(deleteButton);

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
    if(this.parentElement.id == "unchecked") {
        this.parentElement.id = "checked"
        this.parentElement.children[1].style = "text-decoration: line-through;" + "color: #F0E68C;"
        this.parentElement.children[0].src = "/img/ticado.png"
        this.parentElement.children[0].alt = "ticado"
    } else {
        this.parentElement.id = "unchecked"
        this.parentElement.children[1].style = "text-decoration: ''"
        this.parentElement.children[0].src = "/img/no_ticado.png"
        this.parentElement.children[0].alt = "não ticado"
    }
    nameItem.focus();
}

function addFunctionCheckButton() {
    for(let i = 0; i < listButtonCheck.length; i++ ) {
        listButtonCheck[i].addEventListener('click', checkProduto)
        listNameCheck[i].addEventListener('click', checkProduto)
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