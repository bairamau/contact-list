document.querySelector('#itemlist').addEventListener('click', function (event) {
    if (event.target.classList.contains('tab')) {
        openTab(event.target);
        let targetId = event.target.getAttribute('id');
        createTabContent(targetId);
        document.querySelector('#edit').removeAttribute('disabled');
        document.querySelector('#delete').removeAttribute('disabled');
    }
});

document.querySelector('#add').addEventListener('click', function () {
    document.querySelector('#edit-confirm').style.display = 'none';
    document.querySelector('#add-confirm').style.display = 'initial';
    document.querySelector('#form-container').style.display = 'flex';
});

document.querySelector('#delete').addEventListener('click', function () {
    document.querySelector('#confirm-box-container').style.display = 'flex';
    let activeId = getActiveId();
    let firstName = contacts[activeId].firstName;
    let lastName = contacts[activeId].lastName;
    document.querySelector('#delete-name').innerHTML = firstName + ' ' + lastName;
})

document.querySelector('#edit').addEventListener('click', function () {
    let activeId = getActiveId();
    if (activeId) {
        info[0].value = contacts[activeId].firstName;
        info[1].value = contacts[activeId].lastName;
        info[2].value = contacts[activeId].email;
        info[3].value = contacts[activeId].phone;
        info[4].value = contacts[activeId].company;
        info[5].value = contacts[activeId].jobTitle;
        document.querySelector('#edit-confirm').style.display = 'initial';
        document.querySelector('#add-confirm').style.display = 'none';
        document.querySelector('#form-container').style.display = 'flex';
    }

});

document.querySelector('#add-confirm').addEventListener('click', function () {
    if (validateForm()) {
        let parsedForm = new Person(info[0].value, info[1].value, info[2].value, info[3].value, info[4].value, info[5].value);
        addContact(parsedForm);
        clearForm();
        closeForm();
    }
});

document.querySelector('#delete-confirm').addEventListener('click', function () {
    let activeId = getActiveId();
    if (activeId) {
        deleteContact(activeId);
        document.querySelector('#edit').setAttribute('disabled', 'disabled');
        document.querySelector('#delete').setAttribute('disabled', 'disabled');
        document.querySelector('#confirm-box-container').style.display = 'none';
    }
});

document.querySelector('#delete-cancel').addEventListener('click', function () {
    document.querySelector('#confirm-box-container').style.display = 'none';
});

document.querySelector('#edit-confirm').addEventListener('click', function () {
    let activeId = getActiveId();
    let parsedForm = new Person(info[0].value, info[1].value, info[2].value, info[3].value, info[4].value, info[5].value);
    if (validateForm()) {
        editContact(parsedForm, activeId);
        clearForm();
        closeForm();
    }
});

document.querySelector('#close-form').addEventListener('click', function () {
    closeForm();
    clearForm();
});

initStorage();
