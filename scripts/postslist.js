
document.getElementById("details5").onclick = function () {
    location.href = "../html/post.htmls";
};

document.getElementById("details4").onclick = function () {
    location.href = "../html/post.html";
};

document.getElementById("details3").onclick = function () {
    location.href = "../html/post.html";
};

document.getElementById("details2").onclick = function () {
    location.href = "../html/post.html";
};

document.getElementById("details1").onclick = function () {
    location.href = "../html/post.html";
};

document.getElementById("deleteCard3").onclick = function () {
    displayDeleteModal("postCard3")
};


document.getElementById("deleteCard2").onclick = function () {
    displayDeleteModal("postCard2")
};


document.getElementById("deleteCard1").onclick = function () {
    displayDeleteModal("postCard1")
};


document.getElementById("deleteCard4").onclick = function () {
    displayDeleteModal("postCard4")
};


document.getElementById("deleteCard5").onclick = function () {
    displayDeleteModal("postCard5")
};

let popupModal = document.getElementsByClassName("confirmPopUpModal")[0];
let cardToBeDeleted ="";
function displayDeleteModal(cardId){
    cardToBeDeleted = cardId;
    popupModal.style.display = "block";
    window.onclick = function (event) {
        if (event.target === popupModal) {
            popupModal.style.display = "none";
        }
    }
}

function confirmDelete(){
    document.getElementById(cardToBeDeleted).style.display = "none"
    popupModal.style.display = "none";
}

function dismissDialog(){
    popupModal.style.display = "none";
}