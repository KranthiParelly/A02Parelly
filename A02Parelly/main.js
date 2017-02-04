var cubes = {
    invisible: function calculateCubes(a, b, c) {
        return ((a - 2) * (b - 2) * (c - 2));
    }
};

//$(document).ready(function () {
function noOfCubes(a, b, c) {
    $("#calculate").click(function() {
        var a = document.getElementById("sidea").value;
        //alert(a);
        var b = document.getElementById("sideb").value;
        var c = document.getElementById("sidec").value;
        if (a > 2 && a !== null) {
            if (b > 2 && b !== null) {
                if (c > 2 && c !== null) {
                    var d = ((a - 2) * (b - 2) * (c - 2));
                    document.getElementById("output").innerHTML = d;
                } else {
                    alert("The value of 'c' should be greater than 2")
                }
            } else {
                alert("The value of 'b' should be greater than 2")
            }
        } else {
            alert("The value of 'a' should be greater than 2")
        }
        return d;
    })
}
$(document).ready(noOfCubes);