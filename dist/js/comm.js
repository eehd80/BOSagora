$(document).ready(function () {
    // header

    // 스크롤시 header 변경
    var lastScrollTop = 0;

    $(window).scroll(function () {
        let scrollTop = $(this).scrollTop();

        if (scrollTop >= 100) {
            if (scrollTop > lastScrollTop && lastScrollTop > 0) {
                $(".hd").css("top", "-100px");
            } else {
                $(".hd").css("top", "0px");
                $("body").addClass("scrolled");
            }

            lastScrollTop = scrollTop;
        } else {
            $("body").removeClass("scrolled");
        }
    });

    let gnb = $("#gnb");
    header = $("#header");

    gnb.on("mouseover focusin", function () {
        header.addClass("active");
    }).on("mouseleave focusout", function () {
        header.removeClass("active");
    });

    // function depth2Bg() {
    //     let dep1Li = $(".gnb-1dep li"),
    //         dep2Height = $(".gnb-1dep .on .gnb-2dep").height(),
    //         dep2Bg = $(".gnb-2dep-bg");

    //     console.log(dep2Height);

    //     dep1Li.on("mouseenter focusin", function () {
    //         $(this).addClass("on");
    //         $(this).each(function (index) {
    //             let height = $(".on .sub").innerheight();
    //         });

    //         console.log(height);
    //     });
    // }

    // // // gnb();
    // depth2Bg();

    // scrollup
    $("#scrollUp").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            // Store hash
            var hash = this.hash;
            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top,
                },
                900,
                function () {
                    window.location.hash = hash;
                },
            );
        }
    });

    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 600) {
                $(this).addClass("slide");
            }
        });
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
