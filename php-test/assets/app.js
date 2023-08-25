/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';
import Vue from 'vue';

const app = new Vue({
    el: '#app',
    data: function () {
        return {
            coments: [],
            name: '',
            message: ''
        }
    },
    methods: {
        addComment() {
            if (this.name.trim() === "")
                return
            this.coments.push({ 'name': this.name, 'message': this.message})
            this.name = '';
            this.message = '';
        },
        removeComment() {
            this.coments.pop();
        },

    },
    delimiters: ['#{', '}']
})