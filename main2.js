document.addEventListener('DOMContentLoaded', function () {
    var burgerIcon = document.getElementById('burgerIcon');
    var hubbMenu = document.querySelector('.hubb');

    burgerIcon.addEventListener('click', function (event) {
        event.stopPropagation();
        hubbMenu.style.display = (hubbMenu.style.display === 'flex') ? 'none' : 'flex';
    });

    document.body.addEventListener('click', function () {
        hubbMenu.style.display = 'none';
    });
});


$(document).ready(function () {
    $(".AboutWeb").hover(
        function () {
            $(this).css("background-color", "transparent");
            $(this).find(".aboutText").css("opacity", 0);
            $(this).find(".hiddenContent").css("opacity", 1);
        },
        function () {
            $(this).find(".aboutText").css("opacity", 1);
            $(this).find(".hiddenContent").css("opacity", 0);
        }
    );
});


