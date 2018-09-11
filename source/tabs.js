document.addEventListener('click', function (event) {
    if (event.target.classList.contains('tab')) {
        openTab(event.target);
    }
}, false);

function openTab(target) {
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