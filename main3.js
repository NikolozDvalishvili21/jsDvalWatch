function seeMoreClicked() {
    $(".scrollDown").hide();
    $(".Hidden1, .Hidden2").css("display", "flex").animate({ opacity: 1 }, 500);

    $('html, body').animate({
        scrollTop: $(".Hidden1").offset().top
    }, {
        duration: 800,
        easing: "swing"
    });
}