let modal = document.getElementsByClassName("modal")[0];
let btn = document.getElementById("sign_up");
let span = document.getElementsByClassName("close")[0];
let signInModal = document.getElementsByClassName("modal")[1];
let signInBtn = document.getElementById("sign_in");
let signInSpan = document.getElementsByClassName("close")[1];
let register = document.getElementById("register");

btn.onclick = function () {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    } else if (event.target === signInModal) {
        signInModal.style.display = "none";
    }
}

signInBtn.onclick = function () {
    signInModal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
signInSpan.onclick = function () {
    signInModal.style.display = "none";
}

register.onclick = function () {
    signInModal.style.display = "none";
    modal.style.display = "block";
}