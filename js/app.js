/* Add Hash */

$("article").each(function(){
    var content = $(this).children('.showContent').attr('id');
    $(this).attr('id', content);
});

/* Go to Hash */

var gotoHash = function(){
    if($(window.location.hash).length != 0){


        $(document.body).animate({
            'scrollTop':   $(window.location.hash).offset().top - 40
        }, 2000);
        $(window.location.hash).children('.showContent').trigger('click');
    }
}






/*  Scoroll to middle */
var portHeight = $(window).height();
var headerPosition = $("#headerstatic").position();
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

$("article").children('.showContent').on('click', function () {

    var info = $(this).siblings('.articleContent');
    var nappi = $(this).siblings('.nappi');

    if(info.is(':visible')){
        info.slideUp();
        window.location.hash = "#ytimessa";
    }else{
        info.slideDown();
        window.location.hash = "#" + $(this).parent().attr('id');
    }

    if (nappi.hasClass("ympari")){nappi.removeClass("ympari");}
    else{nappi.addClass("ympari");}


});




$(".face-ball").on('click', function () {

    if (!$(".dwi").hasClass("ddwi")) {
        $(".dwi").addClass("ddwi");
    }

    $(this).next(".name").slideToggle();
    $(this).children("img").toggleClass("ddwi");

});


$("#logoSmall").click(function () {
    $("body,html").scrollTop(startPosition);
});

$(".hamburger").click(function () {
    $("#mobileNav").addClass("show");
});

$(".mobileHamburger").click(function () {
    $("#mobileNav").addClass("show");
});

$("#mobileNav nav a").click(function () {
    $("#mobileNav").removeClass("show");
});

$("#mobileNav").click(function () {
    $("#mobileNav").removeClass("show");
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
