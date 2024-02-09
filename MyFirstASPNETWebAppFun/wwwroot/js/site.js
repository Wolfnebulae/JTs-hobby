$(document).ready(function () {
    $("#calculate").click(function () {
        let inputHours = parseInt($("#hours").val());
        if (isNaN(inputHours) || inputHours < 0) {
            alert("Please input a number into the hours box");
        } else {
            let total = inputHours * 10.98;
            $("#total").text("$" + total.toFixed(2));
        }
    });
});