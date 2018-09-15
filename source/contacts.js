var id = 0;
var contacts = [];
var info = document.querySelectorAll('input');

function Person(id, firstName, lastName, email, phone, organisation, jobTitle) {
    this.id = id
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.organisation = organisation;
    this.jobTitle = jobTitle;
}

function addContact(person) {
    contacts.push(person);
    let parent = document.querySelector('#itemlist');
    let li = document.createElement('li');
    let node = document.createTextNode(person.firstName + ' ' + person.lastName);
    li.appendChild(node);
    li.setAttribute('id', person.id);
    li.setAttribute('class', 'tab');
    parent.appendChild(li);
}

function editContact(person, id) {
    contacts[id] = person;
    contacts[id].id = id;
    let li = document.getElementById(id);
    li.innerHTML = person.firstName + ' ' + person.lastName;
    createTabContent(person);
}

function deleteContact(id) {
    properties = document.querySelectorAll('.value');
    for (let property of properties) {
        property.innerHTML = '';
    }
    let child = document.getElementById(id);
    let parent = document.getElementById('itemlist');
    parent.removeChild(child);
}

function validateForm() {
    if (info[0].value == "") {
        info[0].style.backgroundColor = 'pink';
        return false;
    }
    return true;
}

function openTab(target) {
    var tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    target.className += ' active';
    var targetId = target.getAttribute('id');
    createTabContent(contacts[targetId]);
}

function createTabContent(person) {
    document.querySelector('#firstName').innerHTML = person.firstName;
    document.querySelector('#lastName').innerHTML = person.lastName;
    document.querySelector('#email').innerHTML = person.email;
    document.querySelector('#phone').innerHTML = person.phone;
    document.querySelector('#organisation').innerHTML = person.organisation;
    document.querySelector('#jobTitle').innerHTML = person.jobTitle;
}

function getActiveId() {
    let element = document.querySelector('.active');
    if (element) {
        return element.getAttribute('id');
    }
}

function closeForm() {
    document.querySelector('#modal-container').style.display = 'none';
}

function clearForm() {
    for (let i = 0; i < info.length; ++i) {
        info[i].value = "";
        info[i].style.backgroundColor = "initial";
    }
}