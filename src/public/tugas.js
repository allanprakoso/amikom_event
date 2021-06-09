$(document).ready(function () {
    $("#sc").hide();
    $("#iv").hide();

    $.get("/kategori", function (data) {
        const a = [];
        for(i=0 ; i<2 ;i++){
            a.push(data[i]);
        }
        document.getElementById("json").innerHTML = JSON.stringify(a,0,2);
    })
    
    
    $("#send").click(function () {
        var email = $("#email").val();
        email = email.toLowerCase();
        var isEmail = email.search('@') > 0 ? true : false;
        console.log(isEmail);
        if (isEmail) {
            $("#iv").hide();
            $("#sc").hide();
            $("#sc").text(`${email} has been registered!`)
            $("#sc").fadeIn();
        } else {
            $("#sc").hide();
            $("#iv").hide();
            $("#iv").text(`invalid email please input valid email!!`)
            $("#iv").fadeIn();
        }
    })
})