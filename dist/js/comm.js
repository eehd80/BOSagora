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
