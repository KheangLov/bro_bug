/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require('./vue');
window.$ = require("jquery");

$(window).scroll(function() {
    const btn = $('#back_to_top');
    if ($(window).scrollTop() > 300) {
        btn.removeClass('d-none');
    } else {
        btn.addClass('d-none');
    }
});
