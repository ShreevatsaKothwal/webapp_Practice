function openpopup(problemType) {
    var popup = document.getElementById("popup");
    popup.style.display = "block";

    var problem = document.getElementById("popup_title");
    problem.innerText = "Submit Your compalaint - " + problemType;
}

function closePopup(){
    var close = document.getElementById("popup");
    close.style.display = "none";

}


function submitComplaint(){
    let complainText = document.getElementById("popup_input").value;


    if (complainText.trim() === "" ){
        alert("Please enter a complain before submitting !");
        return;
    }

    alert("Complaint Submitted Successfully!");
    closePopup(); 
}



