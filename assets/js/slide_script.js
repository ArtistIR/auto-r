$(document).ready(function(){
    $('.intro_slider').slick({
        dots: false,
        arrows: false,
        infinite: false,
        fade: false,
        asNavFor: ".intro_slider_info_item",
        speed: 1500,
        loop: true,
    });
    $('.intro_slider_info_item').slick({
        prevArrow: '.btn_slide.prev_slide',
        nextArrow: '.btn_slide.next_slide',
        dots: true,
        appendDots: '.slide_nav_item',
        infinite: false,
        speed: 1500,
        asNavFor: ".intro_slider",
        loop: true,
    });


    $('.works_slider_img').slick({
        dots: false,
        arrows: false,
        infinite: false,
        fade: false,
        asNavFor: ".works_slider_info",
        speed: 1000,
    });
    $('.works_slider_info').slick({
        prevArrow: '.w_btn_slide.prev_slide',
        nextArrow: '.w_btn_slide.next_slide',
        dots: true,
        appendDots: '.works_slide_nav_item',
        infinite: false,
        asNavFor:".works_slider_img",
        speed: 1000,
    });


    $('.rec_slider').slick({
        prevArrow: '.rec_btn_slide.prev_slide',
        nextArrow: '.rec_btn_slide.next_slide',
        arrows: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 2,
        infinite: false,
    });
});