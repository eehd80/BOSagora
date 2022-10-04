$(document).ready(function () {
    // header
    function headerfixed() {
        $(window).on("scroll", function () {
            var height = $("#header").height();
            var scroll = $(window).scrollTop();
            if (scroll > height) {
                $("body").addClass("scrolled");
            } else {
                $("body").removeClass("scrolled");
            }
        });
    }
    // function gnb() {
    //     var parent = $("#gnb");
    //     (body = $("body")),
    //         (dep1 = parent.find(">ul>li>a")),
    //         (sub = parent.find(">ul>li>.sub")),
    //         (last = parent.find(">ul>li:last .sub ul li:last>a"));
    //     dep1.on("mouseover focusin", function () {
    //         var t = $(this);
    //         if (t.next().children().children().length) {
    //             body.addClass("on-gnb");
    //             dep1.removeClass("on");
    //             // t.addClass("on");
    //             sub.stop().hide();
    //             t.next().stop().fadeIn(350);
    //         } else {
    //             gnbHide();
    //         }
    //     });
    //     last.on("focusout", function () {
    //         gnbHide();
    //     });
    //     parent.on("mouseleave", function () {
    //         gnbHide();
    //     });
    //     function gnbHide() {
    //         body.removeClass("on-gnb");
    //         dep1.removeClass("on");
    //         sub.stop().hide();
    //     }
    // }

    function gnb() {
        let gnb = $("#gnb");
        header = $("#header");

        gnb.on("mouseover focusin", function () {
            header.addClass("active");
        }).on("mouseleave focusout", function () {
            header.removeClass("active");
        });
    }

    function depth2Bg() {
        let dep2Height = $(".gnb-1dep .on .gnb-2dep").height(),
            dep2Bg = $(".gnb-2dep-bg"),
            dep1Li = $(".gnb-1dep li");

        console.log(dep2Height);

        dep1Li.on("mouseover focusin", function () {
            dep2Bg = dep2Height;
            console.log(dep2Height);
        });
    }

    headerfixed();
    gnb();
    depth2Bg();

    // scrollup
    $(function () {
        $.scrollUp();
    });

    // swiper-intro
    var swiper = new Swiper(".slide-intro", {
        // spaceBetween: 30,
        effect: "fade",
        centeredSlides: true,
        loop: true,
        // autoplay: {
        //   delay: 2500,
        //   disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
