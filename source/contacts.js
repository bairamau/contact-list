var id = 0;
var contacts = [];

function Person(firstName, lastName, email, phone, organisation, jobTitle) {
    this.id = id++;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.organisation = organisation;
    this.jobTitle = jobTitle;
}

function addContact(contact) {
    contacts.push(contact);
    var parent = document.querySelector('#itemlist');
    var li = document.createElement('li');
    var node = document.createTextNode(contact.firstName + ' ' + contact.lastName);
    li.appendChild(node);
    li.setAttribute('id', contact.id);
    li.setAttribute('class', 'tab');
    parent.appendChild(li);
    addDeleteButton(li);
}

function addDeleteButton(li) {
    var span = document.createElement("span");
    var txt = document.createTextNode("×");
    span.className = "delete";
    //span.title = "Delete contact";
    span.appendChild(txt);
    li.appendChild(span);

}

function deleteContact(identificator) {
    properties = document.querySelectorAll('p span');
    for(property of properties){
        property.innerHTML = '';
    }
    var child = document.getElementById(identificator);
    var parent = document.getElementById('itemlist');
    parent.removeChild(child);
}


function validateForm() {
    var info = document.querySelectorAll('input');
    let contact = new Person(info[0].value, info[1].value, info[2].value, info[3].value, info[4].value, info[5].value);
    addContact(contact);
    for (let property of info) {
        property.value = "";
    }
}

addContact(new Person('John', 'Smith', 'johnsmith@example.com', '12345678', 'smith inc.', 'CEO'));
addContact(new Person('Ayy', 'Lamar', 'ayy@lamar.xyz', '63350541', '', ''));
addContact(new Person('John', 'Smith', 'johnsmith@example.com', '12345678', 'smith inc.', 'CEO'));
addContact(new Person('Ayy', 'Lamar', 'ayy@lamar.xyz', '63350541', '', ''));

document.querySelector('#open-modal').addEventListener('click', function () {
    document.querySelector('#modal-container').style.display = 'block';
});
document.querySelector('#close-modal').addEventListener('click', function () {
    document.querySelector('#modal-container').style.display = 'none';
});

document.querySelector('#close-modal').addEventListener('click', function () {
    document.querySelector('#modal-container').style.display = 'none';
});

document.querySelector('.submit-button').addEventListener('click', validateForm);
