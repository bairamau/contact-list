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
}

function deleteCurrentContact() {
    properties = document.querySelectorAll('.value');
    for (property of properties) {
        property.innerHTML = '';
    }
    var child = document.querySelector('.active');
    var parent = document.getElementById('itemlist');
    parent.removeChild(child);
}


function validateForm() {
    var info = document.querySelectorAll('input');
    if (info[0].value == "") {
        info[0].style.backgroundColor = 'pink';
    }
    else {
        let contact = new Person(info[0].value, info[1].value, info[2].value, info[3].value, info[4].value, info[5].value);
        addContact(contact);
        for (let property of info) {
            property.value = "";
        }
        info[0].style.backgroundColor = 'initial';
    }
}

addContact(new Person('John', 'Smith', 'johnsmith@example.com', '12345678', 'smith inc.', 'CEO'));
addContact(new Person('Ayy', 'Lamar', 'ayy@lamar.xyz', '63350541', '', ''));
addContact(new Person('August', 'Rush', 'augustrush@gmail.com', '55555555', 'Dominos', 'Delivery'));

document.querySelector('#open-modal').addEventListener('click', function () {
    document.querySelector('#modal-container').style.display = 'block';
});
document.querySelector('#close-modal').addEventListener('click', function () {
    document.querySelector('#modal-container').style.display = 'none';
});

document.querySelector('#close-modal').addEventListener('click', function () {
    document.querySelector('#modal-container').style.display = 'none';
});

document.querySelector('#delete').addEventListener('click', deleteCurrentContact);

document.querySelector('.submit-button').addEventListener('click', validateForm);
