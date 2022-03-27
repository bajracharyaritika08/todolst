var container = document.querySelector('.container'); //Here container is a variable that stores the value passed in the ID container.
var value1 = document.querySelector('.input') //second variable to hold the first item of the list.
var add1 = document.querySelector('.add');

class item { //This is a constructor 
    constructor(name) {
        this.create(name);
    }
    create(name) { //function creating
        var l1 = document.createElement('div');

        l1.classList.add('item');
        var input = document.createElement('input');
        input.type = "text";
        input.disabled = true;
        input.value = name;
        input.classList.add('item_input');

        var remove = document.createElement('button');
        remove.classList.add('remove');
        remove.innerHTML = '<i class="fa fa-trash delete" aria-hidden="true">REMOVE</i>';
        remove.addEventListener('click', () => this.remove(l1));
        container.appendChild(l1);

        l1.appendChild(input);

        l1.appendChild(remove);
    }
    remove(l1) {
        container.removeChild(l1);
    }
}
add1.addEventListener('click', check);
window.addEventListener('keydown', (e) => {
    if (e.which == 13) {
        check();
    }
})

function check() {
    if (value1.value != "") {
        new item(value1.value);
        value1.value = "";
    }
}

function removeAll() {
    document.querySelector('.container').innerHTML = "";
}