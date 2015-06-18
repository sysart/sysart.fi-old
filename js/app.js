/* Add Hash */

$('.uraMahdollisuus').each(function(){
    var content = $(this).children('.tyopaikka').text().toLowerCase().replace(/ |#|\//g, '-');
    $(this).attr('id', content);
});

/* Go to Hash */

var gotoHash = function(){
    if($(window.location.hash).length != 0){


        $(document.body).animate({
            'scrollTop':   $(window.location.hash).offset().top - 40
        }, 2000);
        $(window.location.hash).children('.tyopaikka').trigger('click');
    }
}




/*  Scoroll to middle */

var portHeight = $(window).height();
var ghostHeight = $(".ghost-start").height();
var headerPosition = $("#headerstatic").position();
var headerHeight = $("#headerstatic").height();
var startPadding = portHeight / 2 - 130;
var startPosition = headerPosition.top - startPadding;





// Suffle people

reorder();
function reorder() {
    var grp = $("#sysartilaiset").children();
    var cnt = grp.length;

    var temp, x;
    for (var i = 0; i < cnt; i++) {
        temp = grp[i];
        x = Math.floor(Math.random() * cnt);
        grp[i] = grp[x];
        grp[x] = temp;
    }

    $("#sysartilaiset").append($(grp));
}


$(window).scroll(function () {

    var portHeight = $(window).height();
    var location = $(window).scrollTop();
    var headerPosition = $("#headerstatic").position();
    var newsPosition = $("#ajankohtaista").position();
    var bottomTrigger = newsPosition.top - portHeight;
    var topTrigger = headerPosition.top - portHeight;


    /* Top-bar */
    if (location < topTrigger + 90) {
        $("#topnav").addClass("fixed-bar-4");
    }
    else if (location > topTrigger - 160) {
        $("#topnav").removeClass("fixed-bar-4");
    }

    if (location > headerPosition.top) {
        $("#topnav").addClass("fixed-bar-1");
        $("#headerstatic").addClass("top30");
    }
    else {
        $("#topnav").removeClass("fixed-bar-1");
        $("#headerstatic").removeClass("top30");
    }


    /* Header */
    if (location < topTrigger + 90) {
        $("#header-small").addClass("fixed-bar-5");
        $("#header-small").removeClass("hide");
    }
    else {
        $("#header-small").removeClass("fixed-bar-5");
        $("#header-small").addClass("hide");

    }

    if (location > newsPosition.top - 120) {
        $("#header-small").addClass("fixed-bar-2");
        $("#header-small").removeClass("hide");
    }
    else {
        $("#header-small").removeClass("fixed-bar-2");
        $("#header-small").addClass("hide");
    }


    /* Bottom-bar */
    if (location < bottomTrigger) {
        $("#bottomnav").addClass("fixed-bar-6");
        $("#basement").addClass("top30")
    }
    else {
        $("#bottomnav").removeClass("fixed-bar-6");
        $("#basement").removeClass("top30")
    }

    if (location > newsPosition.top - 90) {
        $("#bottomnav").addClass("fixed-bar-3");
    }
    else {
        $("#bottomnav").removeClass("fixed-bar-3");
    }


});


/* Alku */
$(document).ready(function () {

    $("body,html").scrollTop(startPosition);

    setTimeout(function () {
        $("#header").removeClass("header-start");
        $("#ghost").removeClass("ghost-start");
        $(".nav-start").removeClass("nav-start");
    }, 500);



    setTimeout(function () {
        $("#logo").fadeIn();
    }, 1000);


    setTimeout(function () {
        $(".row").removeClass("row-start");

        // Check if has hash ?
        gotoHash();
    }, 1500);






});

$(".uraMahdollisuus").children('.tyopaikka').on('click', function () {

    var info = $(this).siblings('.uraInfo');

    if(info.is(':visible')){
        info.slideUp();
        window.location.hash = "";
    }else{
        info.slideDown();
        window.location.hash = "#" + $(this).parent().attr('id');
    }




});




$(".face-ball").on('click', function () {

    if (!$(".dwi").hasClass("ddwi")) {
        $(".dwi").addClass("ddwi");
    }

    $(this).next(".name").slideToggle();
    $(this).children("img").toggleClass("ddwi");

});


$("#sekoita").click(function () {
    reorder();
});


$("#johto").click(function () {
    $(".face-ball").children("img").addClass("ddwi");
    $(".face-ball").next(".name").slideUp();


    if ($(this).hasClass("valittu")) {
        $(this).removeClass("valittu");
        $(".johto").children("img").addClass("ddwi");
        $(".johto").next(".name").slideUp();
        $(".dwSelect").children().removeClass("valittu");
    }

    else {
        if (!$(".dwi").hasClass("ddwi")) {
            $(".dwi").addClass("ddwi");
        }
        $(".name").slideUp();
        $(".johto").children("img").removeClass("ddwi");
        $(".johto").next(".name").slideDown();
        $(".dwSelect").removeClass("valittu");
        $(this).addClass("valittu");
    }
});

$("#oulu").click(function () {
    $(".face-ball").children("img").addClass("ddwi");
    $(".face-ball").next(".name").slideUp();


    if ($(this).hasClass("valittu")) {
        $(this).removeClass("valittu");
        $(".oulu").children("img").addClass("ddwi");
        $(".oulu").next(".name").slideUp();
    }

    else {
        if (!$(".dwi").hasClass("ddwi")) {
            $(".dwi").addClass("ddwi");
        }
        $(".name").slideUp();
        $(".oulu").children("img").removeClass("ddwi");
        $(".oulu").next(".name").slideDown();
        $(".dwSelect").removeClass("valittu");
        $(this).addClass("valittu");
    }
});

$("#helsinki").click(function () {
    $(".face-ball").children("img").addClass("ddwi");
    $(".face-ball").next(".name").slideUp();

    if ($(this).hasClass("valittu")) {
        $(this).removeClass("valittu");
        $(".helsinki").children("img").addClass("ddwi");
        $(".helsinki").next(".name").slideUp();
    }

    else {
        if (!$(".dwi").hasClass("ddwi")) {
            $(".dwi").addClass("ddwi");
        }
        $(".name").slideUp();
        $(".helsinki").children("img").removeClass("ddwi");
        $(".helsinki").next(".name").slideDown();
        $(".dwSelect").removeClass("valittu");
        $(this).addClass("valittu");
    }
});

$("#kaikki").click(function () {

    if ($(this).hasClass("valittu")) {
        $(this).removeClass("valittu");
        $(".face-ball").children("img").addClass("ddwi");
        $(".face-ball").next(".name").slideUp();
    }

    else {
        if (!$(".dwi").hasClass("ddwi")) {
            $(".dwi").addClass("ddwi");
        }
        $(".name").slideUp();
        $(".face-ball").children("img").removeClass("ddwi");
        $(".face-ball").next(".name").slideDown();
        $(".dwSelect").removeClass("valittu");
        $(this).addClass("valittu");
    }
});


$(".readmore").click(function () {
    $(this).nextAll(".news-content").slideToggle();
    $(this).toggleClass("spin");
});


$('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
});
