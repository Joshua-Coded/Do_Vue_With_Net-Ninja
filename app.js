const app = Vue.createApp({
    data(){
        return {
            title: "the finale",
            author: "Brandon sanderson",
            age: 80,
        }
    },

    methods: {
            changeTitle(title){
                this.title = title
            }
    }
});


app.mount("#app")