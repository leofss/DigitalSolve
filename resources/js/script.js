$(document).ready(function () {
    $(".about-section").waypoint(function (direction) {
        if(direction=="down"){
            $("nav").addClass('sticky-nav');
        }
        else{
            $("nav").removeClass('sticky-nav')
        }
    })

    $(".js--packages-section").waypoint(function () {
        $(".js--starter").addClass('animate__animated animate__pulse');
        });
    $(".js--packages-section").waypoint(function () {
        $(".js--corp").addClass('animate__animated animate__pulse');
        });
    $(".js--packages-section").waypoint(function () {
        $(".js--enterprise").addClass('animate__animated animate__pulse');
        });
        

});