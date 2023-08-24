const app = Vue.createApp({
    data(){
        return {
            url: 'https://afri-homes-3pyp.vercel.app/',
            showBook: true,
            books: [
                {title: "name of the wind", author: "patrick"},
                {title: "the way of kings", author: "brandon sanderson"},
                {title: "the final empire", author: "brandon sanderson"},
                {title: "name of the wind", author: "joshua alana"},
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