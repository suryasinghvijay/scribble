function signUpButtonClicked() {
    let modal = document.getElementsByClassName("signUpModal")[0];
    let btn = document.getElementById("sign_up");
    let span = document.getElementsByClassName("close")[0];

// sign-in button
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
        }
    }
}

function signInButtonClicked(){

}