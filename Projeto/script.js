let nameItem = document.getElementById('name-item');
let btnAddItem = document.getElementById('btn-add-item');
let ul = document.getElementById('list-items')

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
}

function deleteProduto() {
    
}

btnAddItem.addEventListener('click', addElement);
deleteButton.addEventListener('click', deleteProduto);