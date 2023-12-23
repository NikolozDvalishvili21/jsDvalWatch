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



var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var control = document.getElementsByTagName('script')[0];
control.parentNode.insertBefore(tag, control);

var Video;

function onYouTubePlayerAPIReady() {
    Video = new YT.Player('Player', {
        width: '1420px',
        height: '600px',
        videoId: 'PLl99DlL6b4'
    });
}



document.querySelector('#SeeDet').addEventListener('click', () => {
    const targetSection = document.getElementById('footerSection');

    const detailsSectionHeight = document.querySelector('.DetailsMain').offsetHeight;
    const topMoviesSectionHeight = document.querySelector('.TopMov').offsetHeight;

    const scrollOffset = 180;

    const targetPosition = detailsSectionHeight + topMoviesSectionHeight + scrollOffset;

    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
});





