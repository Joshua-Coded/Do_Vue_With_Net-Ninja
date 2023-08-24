const app = Vue.createApp({
    data(){
        return {
            url: 'https://afri-homes-3pyp.vercel.app/',
            showBook: true,
            books: [
                {title: 'name of the wind', author: 'patrick', img: 'assets/1.jpg', isFav: true},
                {title: 'the way of kings', author: 'brandon sanderson', img: 'assets/2.png', isFav: false},
                {title: 'the final empire', author: 'brandon sanderson', img: 'assets/3.JPG', isFav: true},
                {title: 'name of the wind', author: 'joshua alana', img: 'assets/4.png', isFav: false},
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