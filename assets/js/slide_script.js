$(document).ready(function(){
    $('.intro_slider').slick({
        dots: false,
        arrows: false,
        infinite: true,
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
        infinite: true,
        speed: 1500,
        asNavFor: ".intro_slider",
        loop: true,
    });

    $('.works_slider_img').slick({
        dots: false,
        arrows: false,
        infinite: true,
        fade: false,
        asNavFor: ".works_slider_info",
        speed: 1000,
    });
    $('.works_slider_info').slick({
        prevArrow: '.w_btn_slide.prev_slide',
        nextArrow: '.w_btn_slide.next_slide',
        dots: true,
        appendDots: '.works_slide_nav_item',
        infinite: true,
        asNavFor:".works_slider_img",
        speed: 1000,
    });
});