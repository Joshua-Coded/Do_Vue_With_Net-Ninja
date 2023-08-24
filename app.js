const app = Vue.createApp({
    data(){
        return {
            showBook: true,
            title: "the finale",
            author: "Brandon sanderson",
            age: 80,
        }
    },

    methods: {
            toggleShowBooK(){
                this.showBook = !this.showBook
            }
    }
});


app.mount("#app")