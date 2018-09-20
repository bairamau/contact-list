var id = 0;
var contacts = {};
var info = document.querySelectorAll('input');

function initStorage() {
    if (localStorage.length == 0) {
        addContact(new Person('John', 'Smith', 'johnsmith@example.com', '12345678', 'smith inc.', 'CEO'));
        addContact(new Person('Ayy', 'Lamar', 'ayy@lamar.xyz', '63350541', '', ''));
        addContact(new Person('August', 'Rush', 'augustrush@gmail.com', '55555555', 'Dominos', 'Delivery'));
    }
    else {
        recoverData();
    }
}

function recoverData() {
    id = localStorage['id'];
    contacts = JSON.parse(localStorage['contacts']);
    for(let key in contacts){
        renderContact(key);
    }
}

function updateLocalStorage() {
    localStorage['contacts'] = JSON.stringify(contacts);
    localStorage['id'] = id;
}

function renderContact(id) {
    let parent = document.querySelector('#itemlist');
    let li = document.createElement('li');
    let text = document.createTextNode(contacts[id].firstName + ' ' + contacts[id].lastName);
    li.appendChild(text);
    li.setAttribute('id', id);
    li.setAttribute('class', 'tab');
    parent.appendChild(li);
}

function Person(firstName, lastName, email, phone, company, jobTitle) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.phone = phone;
    this.company = company;
    this.jobTitle = jobTitle;
}

function addContact(person) {
    contacts[id] = person;
    updateLocalStorage();
    renderContact(id++);
}

function editContact(person, id) {
    contacts[id] = person;
    let li = document.getElementById(id);
    li.innerHTML = person.firstName + ' ' + person.lastName;
    updateLocalStorage();
    createTabContent(id);
}

function deleteContact(id) {
    removeTab(id);
    delete contacts[id];
    updateLocalStorage();
    clearTabContent();
}

function removeTab(id) {
    let child = document.getElementById(id);
    let parent = document.getElementById('itemlist');
    parent.removeChild(child);
}

function clearTabContent() {
    properties = document.querySelectorAll('.value');
    for (let property of properties) {
        property.innerHTML = '';
    }
}

function validateForm() {
    return document.querySelector('form').reportValidity();
}

function openTab(target) {
    var tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    target.className += ' active';
}

function createTabContent(id) {
    document.querySelector('#firstName').innerHTML = contacts[id].firstName;
    document.querySelector('#lastName').innerHTML = contacts[id].lastName;
    document.querySelector('#email').innerHTML = contacts[id].email;
    document.querySelector('#phone').innerHTML = contacts[id].phone;
    document.querySelector('#company').innerHTML = contacts[id].company;
    document.querySelector('#jobTitle').innerHTML = contacts[id].jobTitle;
}

function getActiveId() {
    let element = document.querySelector('.active');
    if (element) {
        return element.getAttribute('id');
    }
}

function closeForm() {
    document.querySelector('#form-container').style.display = 'none';
}

function clearForm() {
    for (let i = 0; i < info.length; ++i) {
        info[i].value = "";
    }
}