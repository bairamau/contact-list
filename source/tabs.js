document.querySelector('#itemlist').addEventListener('click', function (event) {
    if (event.target.classList.contains('tab')) {
        openTab(event.target);
    }
});

document.querySelector('#add').addEventListener('click', function () {
    document.querySelector('#edit-confirm').style.display = 'none';
    document.querySelector('#add-confirm').style.display = 'initial';
    document.querySelector('#modal-container').style.display = 'block';
});

document.querySelector('#edit').addEventListener('click', function () {
    let id = getActiveId();
    info[0].value = contacts[id].firstName;
    info[1].value = contacts[id].lastName;
    info[2].value = contacts[id].email;
    info[3].value = contacts[id].phone;
    info[4].value = contacts[id].organisation;
    info[5].value = contacts[id].jobTitle;
    document.querySelector('#edit-confirm').style.display = 'initial';
    document.querySelector('#add-confirm').style.display = 'none';
    document.querySelector('#modal-container').style.display = 'block';

});

document.querySelector('#delete').addEventListener('click', function () {
    let activeId = getActiveId();
    if (id) {
        deleteContact(activeId);
    }
});

document.querySelector('#add-confirm').addEventListener('click', function () {
    if (validateForm()) {
        let parsedForm = new Person(id++, info[0].value, info[1].value, info[2].value, info[3].value, info[4].value, info[5].value);
        addContact(parsedForm);
        clearForm();
        closeForm();
    }
});

document.querySelector('#edit-confirm').addEventListener('click', function () {
    let activeId = getActiveId();
    let parsedForm = new Person(id, info[0].value, info[1].value, info[2].value, info[3].value, info[4].value, info[5].value);
    if (validateForm() && activeId) {
        editContact(parsedForm, activeId);
        clearForm();
        closeForm();
    }
});

document.querySelector('#close-modal').addEventListener('click', function () {
    closeForm();
    clearForm();
});

addContact(new Person(id++, 'John', 'Smith', 'johnsmith@example.com', '12345678', 'smith inc.', 'CEO'));
addContact(new Person(id++, 'Ayy', 'Lamar', 'ayy@lamar.xyz', '63350541', '', ''));
addContact(new Person(id++, 'August', 'Rush', 'augustrush@gmail.com', '55555555', 'Dominos', 'Delivery'));
