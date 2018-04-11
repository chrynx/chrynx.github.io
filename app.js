$(() => {
const closeNav = () => {
    $('#navbar').css({
        'transition': '0.5s',
        'transform': 'translateX(-100%)'
    })
    $('#backdrop').css({
        'transition': '0.7s',
        'transform': 'translateY(-100vh)'
    })
}
$('#navbarBurger').click(() => {
    $('#navbar').css({
        'transition': '0.5s',
        'transform': 'translateX(0)'
    })
    $('#backdrop').css({
        'transition': '0.7s',
        'transform': 'translateY(0)'
    })
});
$('#backdrop').click(() => {
    closeNav();
});

$('#aboutLink').click(() => {
    $('#about').css({
        'display': 'flex'
    })
    $('#projects').css({
        'display': 'none'
    })
    $('#contact').css({
        'display': 'none'
    })
    closeNav();
});
$('#projectsLink').click(() => {
    $('#about').css({
        'display': 'none'
    })
    $('#projects').css({
        'display': 'flex'
    })
    $('#contact').css({
        'display': 'none'
    })
    closeNav();
});
$('#contactLink').click(() => {
    $('#about').css({
        'display': 'none'
    })
    $('#projects').css({
        'display': 'none'
    })
    $('#contact').css({
        'display': 'flex'
    })
    closeNav();
});

});