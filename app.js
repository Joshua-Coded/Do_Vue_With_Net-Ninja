const app = Vue.createApp({
    data(){
        return {
            title: "the finale",
            author: "Brandon sanderson",
            age: 80,
        }
    },

    methods: {
            changeTitle(){
                this.title = "change the world title"
            }
    }
});


app.mount("#app")