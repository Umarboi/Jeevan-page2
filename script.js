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

function getTest() {
    alert("Getting test...");
}