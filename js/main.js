
// //Get the button
// var mybutton = document.getElementById("myBtn");

// // When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function () { scrollFunction() };

// function scrollFunction() {
//     if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//         mybutton.style.display = "block";
//     } else {
//         mybutton.style.display = "none";
//     }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

// var testimonialThumbs = new Swiper(".testimonial-thumbs", {
//     spaceBetween: 10,
//     slidesPerView: 3,
//     centeredSlides: true,
//     freeMode: true,
//     autoplay: true,
//     loop: true,
//     speed: 3000
// });
// var testimonialContent = new Swiper(".testimonial-comment", {
//     spaceBetween: 10,
//     autoplay: true,
//     loop: true,
//     speed: 3000,
//     thumbs: {
//         swiper: testimonialThumbs
//     },
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true
//     }
// });



// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     loop: true,
//     pagination: {
//         el: ".swiper-pagination",
//         clickable: true,
//     },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//     },
// });
$(document).ready(function () {
    $('.counter').countUp();

    $('.document_number').waypoint(function (direction) {
        animateFlipInX(this.element, direction);
    }, { offset: '90%' });

    $('.picture').waypoint(function (direction) {
        animateZoomIn(this.element, direction);
    }, { offset: '90%' });
    $('.picture1').waypoint(function (direction) {
        animateZoomIn(this.element, direction);
    }, { offset: '90%' });
    $('.samplephoto').waypoint(function (direction) {
        animateZoomIn(this.element, direction);
    }, { offset: '90%' });
    $('.samplephoto1').waypoint(function (direction) {
        animateZoomIn(this.element, direction);
    }, { offset: '90%' });
    $('.items').waypoint(function (direction) {
        animatelightSpeedInRight(this.element, direction);
    }, { offset: '100%' });

    function animateFlipInX(target, direction) {
        console.log(target, direction)
        if (direction === "down") {
            $(target).removeClass("hidden");
            $(target).addClass("animate__animated animate__flipInX animate__delay-1s 1s");
        }
        if (direction === "up") {
            $(target).removeClass("animate__animated animate__flipInX animate__delay-1s 1s");
            $(target).addClass("hidden");
        }
    }

    function animateZoomIn(target, direction) {
        console.log(target, direction)
        if (direction === "down") {
            $(target).removeClass("hidden");
            $(target).addClass("animate__animated animate__zoomIn animate__delay-1s 1s");
        }
        if (direction === "up") {
            $(target).addClass("hidden");
            $(target).removeClass("animate__animated animate__zoomIn animate__delay-1s 1s");
        }
    }
    function animatelightSpeedInRight(target, direction) {
        console.log(target, direction)
        if (direction === "down") {
            $(target).removeClass("hidden");
            $(target).addClass("animate__animated animate__lightSpeedInRight animate__delay-1s 1s");
        }
        if (direction === "up") {
            $(target).addClass("hidden");
            $(target).removeClass("animate__animated animate__lightSpeedInRight animate__delay-1s 1s");
        }
    }
   
});
var c = document.getElementById("c");
var ctx = c.getContext("2d");
var cH;
var cW;
var bgColor = "#FF6138";
var animations = [];
var circles = [];

var colorPicker = (function () {
    var colors = ["#FF6138", "#FFBE53", "#2980B9", "#282741"];
    var index = 0;
    function next() {
        index = index++ < colors.length - 1 ? index : 0;
        return colors[index];
    }
    function current() {
        return colors[index]
    }
    return {
        next: next,
        current: current
    }
})();

function removeAnimation(animation) {
    var index = animations.indexOf(animation);
    if (index > -1) animations.splice(index, 1);
}

function calcPageFillRadius(x, y) {
    var l = Math.max(x - 0, cW - x);
    var h = Math.max(y - 0, cH - y);
    return Math.sqrt(Math.pow(l, 2) + Math.pow(h, 2));
}

function addClickListeners() {
    document.addEventListener("touchstart", handleEvent);
    document.addEventListener("mousedown", handleEvent);
};

function handleEvent(e) {
    if (e.touches) {
        e.preventDefault();
        e = e.touches[0];
    }
}


