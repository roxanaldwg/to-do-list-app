// To-Do-List-App

//jQuery

//1. Adding a new item to the list of items:
function newItem(){
  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("Please write something!");
  } else {
    $('#list').append(li);
    $('#input').val('');
  }

//2. Crossing an item out:
function crossOut() {
	li.toggleClass('strike');
}

li.on('dblclick', crossOut);

//3. Adding delete button
let deleteButton = $('<deleteButton></deleteButton>');
deleteButton.append(document.createTextNode('X'));
li.append(deleteButton);

function deleteListItem() {
  li.addClass('delete');
}

deleteButton.on('click', deleteListItem);

// 4. Reordering the items:
$('#list').sortable();
}
