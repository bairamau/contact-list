var id = 0;
var contacts = [];

function Person(id, firstName, lastName, email, phone, organisation, jobTitle) {
    this.id = id;
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

addContact(new Person(id++, 'John', 'Smith', 'johnsmith@example.com', '12345678', 'smith inc.', 'CEO'));
addContact(new Person(id++, 'Ayy', 'Lamar', 'ayy@lamar.xyz', '63350541', '', ''));

