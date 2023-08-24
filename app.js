const app = Vue.createApp({
    data(){
        return {
            url: 'https://afri-homes-3pyp.vercel.app/',
            showBook: true,
            books: [
                {title: 'name of the wind', author: 'patrick', img: 'assets/1.jpg'},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.png'},
                {title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.JPG'},
                {title: 'name of the wind', author: 'joshua alana', img: 'assets/4.png'},
            ]
        }
    },

    methods: {
            toggleShowBooK(){
                this.showBook = !this.showBook
            },
    }
});


app.mount("#app")