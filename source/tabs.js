document.addEventListener('click', function (event) {
    if (event.target.classList.contains('tab')) {
        openTab(event.target);
    }
    else if (event.target.classList.contains('delete')){
        deleteContact(event.target.parentNode.getAttribute('id'));
    }
}, false);

function openTab(target) {
    var tabs = document.getElementsByClassName("tab");
    for (i = 0; i < tabs.length; i++) {
        tabs[i].className = tabs[i].className.replace(" active", "");
    }
    target.className += ' active';
    var targetId = target.getAttribute('id');
    for (let person of contacts) {

        if (person.id == targetId) {
            createTabContent(person);
            break;
        }
    }
}

function createTabContent(person) {
    document.querySelector('#firstName').innerHTML = person.firstName;
    document.querySelector('#lastName').innerHTML = person.lastName;
    document.querySelector('#email').innerHTML = person.email;
    document.querySelector('#phone').innerHTML = person.phone;
    document.querySelector('#organisation').innerHTML = person.organisation;
    document.querySelector('#jobTitle').innerHTML = person.jobTitle;
}