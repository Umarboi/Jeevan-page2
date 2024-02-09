document.getElementById("symptomInput").addEventListener("input", function () {
    var input, filter, symptoms, labels, i;

    input = document.getElementById("symptomInput");
    filter = input.value.toUpperCase();
    symptoms = document.getElementById("symptomsList");
    labels = symptoms.getElementsByTagName("label");

    for (i = 0; i < labels.length; i++) {
        var symptomText = labels[i].innerText.toUpperCase();
        if (symptomText.indexOf(filter) > -1) {
            labels[i].style.display = "";
        } else {
            labels[i].style.display = "none";
        }
    }
});


// Function to scroll to the top of the page
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
}


window.addEventListener('scroll', function() {
    
    const upButton = document.getElementById('upButton');


    if (window.scrollY > 20) {
        upButton.style.display = 'block';
    } else {
        upButton.style.display = 'none';
    }
});




function getTest() {
    alert("Getting test...");
}
