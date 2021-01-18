let signUpModal = document.getElementsByClassName("modal")[0];
let signUpSpan = document.getElementsByClassName("close")[0];
let signInModal = document.getElementsByClassName("modal")[1];
let signInSpan = document.getElementsByClassName("close")[1];
let register = document.getElementById("register");
let createPostModal = document.getElementsByClassName("postCreateModal")[0];
let createPostSpan = document.getElementsByClassName("close")[2];

function displayModal(model, span) {
    console.log("create post model"+ model)

    model.style.display = "block";

    span.onclick = function () {
        model.style.display = "none";
    }

    window.onclick = function (event) {
        if (event.target === model) {
            model.style.display = "none";
        }
    }
}

function showModal(id) {
    console.log("create post id"+ id)
    switch (id) {
        case 'sign_in':
            displayModal(signInModal, signInSpan)
            register.onclick = function () {
                signInModal.style.display = "none";
                signUpModal.style.display = "block";
            }
            break;
        case  'sign_up':
            displayModal(signUpModal, signUpSpan)
            break;
        case 'create_post':
            console.log("create post")
            displayModal(createPostModal, createPostSpan)
            break;
    }
}