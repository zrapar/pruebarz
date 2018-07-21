
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');
require( 'datatables.net-autofill-bs4' )();
require( 'datatables.net-buttons/js/buttons.html5.js' )();
require( 'datatables.net-buttons/js/buttons.print.js' )();
require( 'datatables.net-colreorder-bs4' )();
require( 'datatables.net-fixedcolumns-bs4' )();
require( 'datatables.net-responsive-bs4' )();
var $       = require( 'jquery' );
window.dt      = require( 'datatables.net' )();
window.buttons = require( 'datatables.net-buttons' )();
window.bhtml = require( 'datatables.net-buttons/js/buttons.html5.js' )();
window.bprint = require( 'datatables.net-buttons/js/buttons.print.js' )();
window.swal2 = require('sweetalert2');
window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('example-component', require('./components/ExampleComponent.vue'));

const app = new Vue({
    el: '#app'
});
