$(document).ready(function () {

    

    var publicidad = new Array(
        'image/publi5.jpg',
        'image/publi6.png',
        'image/publi7.jpg',
        'image/publi8.jpg'
    );

    cargarPubli();

    function cargarPubli() {
        var index = Math.floor((Math.random() * publicidad.length));
        $("#publicidad").attr("src", publicidad[index]);

    }
    setInterval(function () {
        cargarPubli();
    }, 18000
    );
    

    $(".comprar").click(function () {

        var usuario = $("#form-username").val();
        var contra = $("#form-password").val();
        var name = new Array('RaViLao', 'jorge', 'july', 'angelfox');
        var pass = new Array('paralelepipedo', 'salas', 'quispe', 'curi');

        var n = 0;
        var index = 0;

        while (n == 0 & index < name.length - 1) {

            if (usuario == name[index]) {

                if (contra == pass[index]) {
                    n = 1;
                } else {
                    n = 3;
                }
            }



            else {
                alert(name[index] + 'can');
                index++;
            }
        }

        if (n == 1) {
            $("#comprar-pro").css("display:none");
            $(".click").css("display", "block");
            $(".username").text(usuario);
            $("#ses").text(usuario);
            $("#reg").css("display", "none");
            $("#ses").css("margin-left", "100px");

        } else {
            $("#form-username").val("");
            $("#form-password").val("");

            $("#form-username").attr("placeholder") == "error";
            $("#form-username").attr("color") == "red";
            $("#comprar-pro").css("display:none");


        }

    });


    $("#comuni").click(function () {

    });




});



